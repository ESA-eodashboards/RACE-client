/* eslint no-bitwise: 0 */

import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { Text, Style, Fill, Stroke } from "ol/style";
import HexGrid from "ol-ext/render/HexGrid";

import bboxPolygon from "@turf/bbox-polygon";
import booleanIntersects from "@turf/boolean-intersects";

// eslint-disable-next-line
import HexSweeperGame from "./board";

/**
 * Generate a pseudorandom 128-bit hash from a string to use as a seed.
 *
 * @param {String} str - The seed string.
 * @returns Four 32-bit numbers used as starting values for the `splitmix32` PRNG.
 */
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);

  h1 ^= h2 ^ h3 ^ h4;
  h2 ^= h1;
  h3 ^= h1;
  h4 ^= h1;

  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

/**
 * Implementation of the fast and simple `splitmix32` PRNG algorithm.
 *
 * @param {Number} a - Initial seed value.
 * @returns {()=> number} The generated random number callback function.
 */
function splitmix32(a) {
  return () => {
    a |= 0; /* eslint-disable-line */
    a = (a + 0x9e3779b9) | 0; /* eslint-disable-line */
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t ^= t >>> 15;
    t = Math.imul(t, 0x735a2d97);
    t ^= t >>> 15;
    return (t >>> 0) / 4294967296;
  };
}

/**
 * Get a seedable random bbox within world bounds.
 *
 * @param {*} worldBounds - The bounding box in which the random bbox should be generated.
 * @param {*} horizontalExtent - How wide the generated bbox should be.
 * @param {string} [seedString] - Optional parameter to make output deterministic and repeatable.
 * @returns The generated bbox as a [long, lat, long, lat] array.
 */
function getRandomBoundingBox(worldBounds, horizontalExtent, seedString) {
  let rng;

  if (seedString === undefined) {
    rng = Math.random;
  } else {
    // Generate a 128-bit hash from the seed string
    const hash = cyrb128(seedString);
    // Use one of the hash values to seed the PRNG
    rng = splitmix32(hash[0]);
  }

  // Calculate vertical extent
  const verticalExtent = horizontalExtent / 1.18;

  // World bounds in the format [minLongitude, minLatitude, maxLongitude, maxLatitude]
  const [minWorldLon, minWorldLat, maxWorldLon, maxWorldLat] = worldBounds;

  // Calculate the maximum latitude and longitude for the origin
  // point to ensure the bounding box fits within world bounds.
  const maxOriginLat = maxWorldLat - verticalExtent;
  const maxOriginLon = maxWorldLon - horizontalExtent;

  // Ensure the origin point is selected such that the bounding box will fit within the worldBounds
  const originLatRange = maxOriginLat - minWorldLat;
  const originLonRange = maxOriginLon - minWorldLon;

  // Randomly select origin point
  const originLat = minWorldLat + rng() * originLatRange;
  const originLon = minWorldLon + rng() * originLonRange;

  // Calculate the bottom-right corner of the bounding box
  const bottomRightLat = originLat + verticalExtent;
  const bottomRightLon = originLon + horizontalExtent;

  // Return the new bounding box.
  return [originLon, originLat, bottomRightLon, bottomRightLat];
}

/**
 * Set up the game grid using HexGrid.
 *
 * @param {*} game - The game object.
 * @returns The created `HexGrid`.
 */
const setupGrid = (game) => {
  const grid = new HexGrid({
    // Types library has a wrong type - fix on https://github.com/Siedlerchr/types-ol-ext/pull/181
    //@ts-expect-error
    size: game.gameSize,
    origin: game.center,
  });
  return {
    grid,
  };
};
/**
 *
 * @param {*} v
 * @param {*} [minValue =1]
 * @param {*} [maxValue =8]
 * @param {*} [minColor = {r: 255, g: 255, b: 255, a: 0.0}]
 * @param {*} [maxColor = {r: 0, g: 0, b: 0, a: 1.0}]
 * @returns
 */
function getColorFromValue(
  v,
  minValue = 1,
  maxValue = 8,
  minColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 0.0,
  },
  maxColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 1.0,
  },
) {
  let value;

  if (Number.isNaN(v)) {
    return "rgba(0, 0, 0, 0)";
  }

  value = v;

  // Ensure the value is within the expected range
  value = Math.max(minValue, Math.min(maxValue, value));

  // Calculate the interpolation factor
  const factor = (value - minValue) / (maxValue - minValue);

  // Interpolate between minColor and maxColor each channel separately
  const r = Math.round(maxColor.r * factor + minColor.r * (1 - factor));
  const g = Math.round(maxColor.g * factor + minColor.g * (1 - factor));
  const b = Math.round(maxColor.b * factor + minColor.b * (1 - factor));
  const a = maxColor.a * factor + minColor.a * (1 - factor);

  // Construct the rgba color string
  const color = `rgba(${r}, ${g}, ${b}, ${a})`;

  return color;
}
/**
 *
 * @param {*} tile
 * @param {*} minValue
 * @param {*} maxValue
 * @param {*} minColor
 * @param {*} maxColor
 * @returns
 */
const getTileStyle = (tile, minValue, maxValue, minColor, maxColor) => {
  let style;
  if (tile.isRevealed === true) {
    if (tile.isMine) {
      style = new Style({
        stroke: new Stroke({ color: "#000", width: 1 }),
        fill: new Fill({ color: "red" }),
        text: new Text({
          text: "🌸",
          font: "16px Calibri,sans-serif",
          fill: new Fill({ color: "#fff" }),
          stroke: new Stroke({ color: "#000", width: 3 }),
        }),
      });
    } else {
      style = new Style({
        stroke: new Stroke({ color: "#000", width: 1 }),
        fill: new Fill({
          color: getColorFromValue(
            tile.value,
            minValue,
            maxValue,
            minColor,
            maxColor,
          ),
        }),
        text: new Text({
          text: tile.adjacentMines ? tile.adjacentMines.toString() : "0",
          font: "16px Calibri,sans-serif",
          fill: new Fill({ color: "#000" }),
          stroke: new Stroke({ color: "#fff", width: 3 }),
        }),
      });
    }
  } else if (tile.isFlagged) {
    style = new Style({
      stroke: new Stroke({ color: "#000", width: 1 }),
      fill: new Fill({ color: "blue" }),
      text: new Text({
        text: "⚑",
        font: "16px Calibri,sans-serif",
        fill: new Fill({ color: "#fff" }),
        stroke: new Stroke({ color: "#000", width: 3 }),
      }),
    });
  } else {
    style = new Style({
      stroke: new Stroke({ color: "#000", width: 0.5 }),
      fill: new Fill({ color: "#AAAAAA4D" }), // Unrevealed tile color
      text: new Text({
        text: "",
        font: "16px Calibri,sans-serif",
      }),
    });
  }

  return style;
};

/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} grid
 * @param {*} vectorSource
 * @param {*} vectorLayer
 * @param {*} game
 */
const updateTileVisuals = (x, y, grid, vectorSource, vectorLayer, game) => {
  const [q, r] = game.convertGameCoordsToAxial(x + 1, y);
  const hexagonVertices = grid.getHexagon([q, r]);
  const feature = new Feature(new Polygon([hexagonVertices]));
  const tile = game.get(x, y);

  // Assign a unique identifier to the feature
  const featureId = `tile-${x}-${y}`;
  feature.setId(featureId);

  // Remove the existing feature if it already exists
  const existingFeature = vectorSource.getFeatureById(featureId);
  if (existingFeature) {
    vectorSource.removeFeature(existingFeature);
  }
  // Apply tile styling for mines, count, unexplored and flagged tiles.
  feature.setStyle(
    getTileStyle(
      tile,
      game.minValue,
      game.maxValue,
      game.minColor,
      game.maxColor,
    ),
  );
  vectorSource.addFeature(feature);

  // Force redraw
  vectorLayer.changed();
};
/**
 *
 * @param {*} game
 * @param {*} grid
 * @param {*} vectorSource
 * @param {*} vectorLayer
 */
const updateAllTileVisuals = (game, grid, vectorSource, vectorLayer) => {
  // Clear the existing features
  vectorSource.clear();

  for (let y = 0; y < game.height; y++) {
    for (let x = 0; x < game.width; x++) {
      updateTileVisuals(x, y, grid, vectorSource, vectorLayer, game);
    }
  }

  // Force redraw
  vectorLayer.changed();
};

/**
 * Handle a map click event.
 *
 * @param {*} e - The click event.
 * @param {HexSweeperGame} game - The game instance.
 * @param {*} grid - The hex grid.
 * @param {*} vectorSource - The vector source for the map.
 * @param {Function} updateTileVisualsCallback - Callback to update tile visuals.
 */
const handleMapClick = (
  e,
  game,
  grid,
  vectorSource,
  updateTileVisualsCallback,
) => {
  e.stopPropagation();
  e.preventDefault();

  let hasUncoveredMine = false;

  const { coordinate } = e;
  // Get the axial coordinates of the clicked hexagon
  const [q, r] = grid.coord2hex(coordinate);
  const gameCoords = game.convertAxialToGameCoords(q, r);
  const [x, y] = [gameCoords.x - 1, gameCoords.y];

  const revealedCoordsList = game.revealTile(x, y);
  if (!revealedCoordsList) {
    return;
  }

  for (const [xx, yy] of revealedCoordsList) {
    hasUncoveredMine = hasUncoveredMine || game.get(xx, yy).isMine;
    updateTileVisualsCallback(xx, yy, grid, vectorSource, game);
  }

  if (hasUncoveredMine) {
    document.dispatchEvent(new Event("minesweeper:gameover"));
    game.revealAllTiles();

    for (let yy = 0; yy < (game.height ?? NaN); yy++) {
      for (let xx = 0; xx < game.width; xx++) {
        updateTileVisualsCallback(xx, yy, grid, vectorSource, game);
      }
    }
  } else {
    document.dispatchEvent(new Event("minesweeper:continue"));
  }
};

/**
 *
 * @param {*} e
 * @param {*} game
 * @param {*} grid
 * @param {*} vectorSource
 * @param {*} vectorLayer
 */
const handleMapRightClick = (e, game, grid, vectorSource, vectorLayer) => {
  e.stopPropagation();
  e.preventDefault();

  const { coordinate } = e;
  // Get the axial coordinates of the clicked hexagon
  const [q, r] = grid.coord2hex(coordinate);
  const gameCoords = game.convertAxialToGameCoords(q, r);
  const [x, y] = [gameCoords.x - 1, gameCoords.y];

  const tile = game.get(x, y);
  if (tile) {
    tile.isFlagged = !tile.isFlagged; // Toggle flag
    updateTileVisuals(x, y, grid, vectorSource, vectorLayer, game);
  }
  document.dispatchEvent(new Event("minesweeper:continue"));
};

/**
 * Draw the game board by creating hexagon features and adding them to the map.
 *
 * @param {HexSweeperGame} game - The game instance.
 * @param {*} grid - The hex grid.
 * @param {*} vectorSource
 */
const drawGameBoard = (game, grid, vectorSource) => {
  if (!game) {
    return;
  }
  for (let y = 0; y < game.height; y++) {
    // Make our edges straight again so the cell calculation works out
    //@ts-expect-error
    let xOffset = (y % 2 !== 0) * 1 - y / 2;
    if (y % 2 === 0) {
      xOffset += 1.0;
    } else {
      xOffset += 0.5;
    }

    for (let x = 0; x < game.width; x++) {
      const tile = game.board[y][x];
      const hexCoords = grid.getHexagon([x + xOffset, y]);
      const feature = new Feature(new Polygon([hexCoords]));

      const style = getTileStyle(
        tile,
        game.minValue,
        game.maxValue,
        game.minColor,
        game.maxColor,
      );
      feature.setStyle(style);
      vectorSource.addFeature(feature);
    }
  }
};

/**
 *
 * @param {*} bbox
 * @param {*} geojson
 * @returns
 */
const findIntersections = async (bbox, geojson) => {
  // Create polygon from the provided bounding box
  const gameBounds = bboxPolygon(bbox);

  // The standard `intersects` function provided by Turf
  // only works with polygons and not GeoJSON features.
  //@ts-expect-error
  const intersectingCountries = geojson.features.filter((feature) =>
    booleanIntersects(gameBounds.geometry, feature),
  );

  return intersectingCountries;
};

export {
  setupGrid,
  updateTileVisuals,
  updateAllTileVisuals,
  handleMapClick,
  handleMapRightClick,
  getTileStyle,
  drawGameBoard,
  getRandomBoundingBox,
  findIntersections,
};
