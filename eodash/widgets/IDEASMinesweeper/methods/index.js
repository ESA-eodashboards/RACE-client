import { store } from "@eodash/eodash"
import Minesweeper from "../minesweeper/game";
import { getRandomBoundingBox, findIntersections } from '../minesweeper';
import { transformExtent } from 'ol/proj';

const minesweeper = {
    isEnabled: false,
    isDialogEnabled: false,
    isLoaded: false,
    mode: 'start',
    game: null,
    timer: null,
    bbox: [],
    minesweeperOptions: {
        // Board dimensions in number of hex cells
        enableSpeciesDisplay: true,
        size: 20,
        geotiff: {
          projection: 'EPSG:4326',
          url: 'https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator2/AR3_wildlife_1.tif',
        },
        selectedLocationIndex: 0,
        minColor: { // dark green
          r: 0, g: 100, b: 0, a: 0.6,
        },
        maxColor: { // light green
          r: 0, g: 255, b: 0, a: 0.6,
        },
        minValue: 1,
        maxValue: 8,
        locations: [
          {
            name: 'Global Coverage',
            bbox: [-24, 33, 42, 71],
            /// How wide the bounding box should be as a longitudinal extent.
            horizontalExtent: 5,
            isMineCondition: (val) => val >= 3.5,
          },
        ],
      },
    elapsedSeconds: 0,
}
async function winMineSweep() {
    clearInterval(minesweeper.timer);
    minesweeper.mode = 'win';
    minesweeper.isDialogEnabled = true;
}
function gameoverMineSweep() {
    clearInterval(minesweeper.timer);
    minesweeper.mode = 'gameover';
    minesweeper.isDialogEnabled = true;
}
function restartMineSweep() {
    console.log('Minesweeper::Restart');
    tearDownMinesweeper();

    minesweeper.mode = 'start';

    window.setTimeout(() => {
        setupMinesweeper();
    }, 1000);
}
function getMapInstance() {
    return { map: store.states.mapEl.value.map }
}
function continueMineSweepCounter() {
    if (minesweeper.game.isGameCompleted) {
        document.dispatchEvent(new Event('minesweeper:win'));
    }
}
function startMineSweepCounter() {
    minesweeper.elapsedSeconds = 0;
    console.info('Minesweeper::StartTimer');
    minesweeper.timer = setInterval(() => {
        minesweeper.elapsedSeconds += 1;
    }, 1000);
}

export async function setupMinesweeper() {
    document.addEventListener('minesweeper:start', startMineSweepCounter);
    document.addEventListener('minesweeper:continue', continueMineSweepCounter);
    document.addEventListener('minesweeper:win', winMineSweep);
    document.addEventListener('minesweeper:gameover', gameoverMineSweep);
    document.addEventListener('minesweeper:restart', restartMineSweep);

    const { map } = getMapInstance();
    let seedString = new URLSearchParams(window.location.search).get('seed');
    if (!seedString) {
        const date = new Date();
        seedString = date.toDateString();
    }
    const location = minesweeper.minesweeperOptions.locations[0];

    minesweeper.spDisplay = minesweeper.minesweeperOptions.enableSpeciesDisplay;
    const bbox = getRandomBoundingBox(location.bbox, location.horizontalExtent, seedString);
    minesweeper.bbox = bbox;

    const res = await fetch('./data/europe_and_iceland_country_borders_fixed.geojson');
    const geojson = await res.json();

    const intersections = await findIntersections(bbox, geojson);

    let wasIntersectionFound = intersections.length > 0;

    while (!wasIntersectionFound) {
        const i = 0;
        seedString += `${i}`;
        new URLSearchParams(window.location.search).set('seed', seedString);
        const newBbox = getRandomBoundingBox(location.bbox, location.horizontalExtent, seedString);

        // eslint-disable-next-line
        const newIntersections = await findIntersections(newBbox, geojson);

        if (newIntersections.length > 0) {
            wasIntersectionFound = true;
            minesweeper.bbox = newBbox;
        }
    }

    minesweeper.game = new Minesweeper(map, {
        ...minesweeper.minesweeperOptions,
        bbox: minesweeper.bbox,
        selectedLocationIndex: 0, //TODO
    });
    minesweeper.isEnabled = true;
    minesweeper.isDialogEnabled = true;
    const extent = transformExtent(
        minesweeper.bbox,
        'EPSG:4326',
        map.getView().getProjection(),
    );
    const padding = calculatePadding();
    map.getView().fit(extent, {
        duration: 500,
        padding,
    });
}


function tearDownMinesweeper() {
    if (minesweeper.game?.vectorLayer) {
        const { map } = getMapInstance();
        map.removeLayer(minesweeper.game.vectorLayer);
    }
    if (minesweeper.game) {
        minesweeper.game.removeEventListeners();
    }
    minesweeper.game = null;
    minesweeper.isEnabled = false;
    minesweeper.isDialogEnabled = false;
    document.removeEventListener('minesweeper:start', startMineSweepCounter);
    document.removeEventListener('minesweeper:continue', continueMineSweepCounter);
    document.removeEventListener('minesweeper:win', winMineSweep);
    document.removeEventListener('minesweeper:gameover', gameoverMineSweep);
    document.removeEventListener('minesweeper:restart', restartMineSweep);
}