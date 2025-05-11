import { store } from "@eodash/eodash";
import Minesweeper from "./hexsweeper/game";
import { getRandomBoundingBox, findIntersections } from "./hexsweeper";
import { transformExtent } from "ol/proj";
import { reactive, toRaw } from "vue";
import geojson from "../../../assets/europe_and_iceland_country_borders_fixed.json";
let firstLoad = true;
/**
 * @type {import("../../types.ts").Minesweeper}
 */
export const minesweeper = reactive({
  isEnabled: false,
  isDialogEnabled: false,
  isLoaded: false,
  mode: "start",
  game: null,
  timer: null,
  bbox: [],
  minesweeperOptions: {
    // Board dimensions in number of hex cells
    enableSpeciesDisplay: true,
    size: 20,
    geotiff: {
      projection: "EPSG:4326",
      url: "https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator2/AR3_wildlife_1.tif",
    },
    minColor: {
      // dark green
      r: 0,
      g: 100,
      b: 0,
      a: 0.6,
    },
    maxColor: {
      // light green
      r: 0,
      g: 255,
      b: 0,
      a: 0.6,
    },
    minValue: 1,
    maxValue: 8,
    locations: [
      {
        name: "Global Coverage",
        bbox: [-24, 33, 42, 71],
        /// How wide the bounding box should be as a longitudinal extent.
        horizontalExtent: 5,
        isMineCondition: (val) => val >= 3.5,
      },
    ],
  },
  elapsedSeconds: 0,
});
/**
 *
 * @param {import("../../types.ts").MinesweeperOptions} minesweeperOptions
 */
export async function setupMinesweeper(minesweeperOptions) {
  minesweeper.minesweeperOptions = minesweeperOptions;

  document.addEventListener("minesweeper:start", startMineSweepCounter);
  document.addEventListener("minesweeper:continue", continueMineSweepCounter);
  document.addEventListener("minesweeper:win", winMineSweep);
  document.addEventListener("minesweeper:gameover", gameoverMineSweep);
  document.addEventListener("minesweeper:restart", restartMineSweep);

  const map = getMapInstance();
  let date = new Date();
  // on first load take today's date
  if (!firstLoad) {
    // allow changing the game with a time selection
    date = new Date(store.states.datetime.value);
  }
  let seedString = date.toDateString();
  const location = minesweeper.minesweeperOptions.locations[0];

  const bbox = getRandomBoundingBox(
    location.bbox,
    location.horizontalExtent,
    seedString,
  );
  minesweeper.bbox = bbox;

  const intersections = await findIntersections(bbox, geojson);

  let wasIntersectionFound = intersections.length > 0;

  while (!wasIntersectionFound) {
    const i = 0;
    seedString += `${i}`;
    const newBbox = getRandomBoundingBox(
      location.bbox,
      location.horizontalExtent,
      seedString,
    );

    const newIntersections = await findIntersections(newBbox, geojson);

    if (newIntersections.length > 0) {
      wasIntersectionFound = true;
      minesweeper.bbox = newBbox;
    }
  }

  minesweeper.game = new Minesweeper(map, {
    ...minesweeper.minesweeperOptions,
    bbox: minesweeper.bbox,
  });
  minesweeper.isEnabled = true;
  minesweeper.isDialogEnabled = true;
  const extent = transformExtent(
    minesweeper.bbox,
    "EPSG:4326",
    map.getView().getProjection(),
  );
  map.getView().fit(extent, {
    duration: 500,
  });
  firstLoad = false;
}

export function tearDownMinesweeper() {
  if (minesweeper.game?.vectorLayer) {
    const map = getMapInstance();
    const analysisGroup = map.getLayers().getArray().find((i) => i.get('id') === "AnalysisGroup");
    //@ts-expect-error
    analysisGroup.getLayers().remove(toRaw(minesweeper.game.vectorLayer));
    console.log("map", map.getLayers().getArray());
  }
  if (minesweeper.game) {
    minesweeper.game.removeEventListeners();
  }
  minesweeper.game = null;
  minesweeper.isEnabled = false;
  minesweeper.isDialogEnabled = false;
  document.removeEventListener("minesweeper:start", startMineSweepCounter);
  document.removeEventListener(
    "minesweeper:continue",
    continueMineSweepCounter,
  );
  document.removeEventListener("minesweeper:win", winMineSweep);
  document.removeEventListener("minesweeper:gameover", gameoverMineSweep);
  document.removeEventListener("minesweeper:restart", restartMineSweep);
}

export async function restartMineSweep() {
  console.log("Minesweeper::Restart");
  await tearDownMinesweeper();

  minesweeper.mode = "start";
  if (!minesweeper.minesweeperOptions) {
    console.error("Minesweeper options are not set");
    return;
  }
  await setupMinesweeper(minesweeper.minesweeperOptions);
}

async function winMineSweep() {
  if (!minesweeper.timer) {
    return;
  }
  clearInterval(minesweeper.timer);
  minesweeper.mode = "win";
  minesweeper.isDialogEnabled = true;
}
function gameoverMineSweep() {
  if (!minesweeper.timer) {
    return;
  }
  clearInterval(minesweeper.timer);
  minesweeper.mode = "gameover";
  minesweeper.isDialogEnabled = true;
}

/**
 *
 * @returns {import("ol/Map").default}
 */

function getMapInstance() {
  return store.states.mapEl.value?.map;
}
function continueMineSweepCounter() {
  if (!minesweeper.game?.isGameCompleted) {
    return;
  }
  document.dispatchEvent(new Event("minesweeper:win"));
}
function startMineSweepCounter() {
  minesweeper.elapsedSeconds = 0;
  console.info("Minesweeper::StartTimer");
  minesweeper.timer = setInterval(() => {
    minesweeper.elapsedSeconds += 1;
  }, 1000);
}
