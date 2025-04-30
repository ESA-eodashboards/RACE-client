export interface Specie {
  species: string;
  common_name: string;
  conservation_status: string;
  image_url: string;
  count: number;
}

export type Species = Specie[];

export interface Minesweeper {
  isEnabled: boolean;
  isDialogEnabled: boolean;
  isLoaded: boolean;
  mode: string;
  game: Record<string, any> | null;
  timer: number | null;
  bbox: number[];
  minesweeperOptions: {
    enableSpeciesDisplay: boolean;
    size: number;
    geotiff: { projection: string; url: string };
    selectedLocationIndex: number;
    minColor: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    maxColor: {
      // light green
      r: number;
      g: number;
      b: number;
      a: number;
    };
    minValue: 1;
    maxValue: 8;
    locations: Locations;
  };
  elapsedSeconds: number;
}
export type Locations = {
  name: string;
  bbox: number[];
  /// How wide the bounding box should be as a longitudinal extent.
  horizontalExtent: number;
  isMineCondition: (val: number) => boolean;
}[];
