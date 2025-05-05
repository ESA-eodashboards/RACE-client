import { defineConfig } from "@eodash/eodash/config";

export default defineConfig({
  entryPoint: "./eodash/main.js",
  widgets: "./eodash/widgets",
  lib: true,
  vite: {
    optimizeDeps: {
      include: [
        "ol-ext",
        "proj4",
        "@turf/bbox-polygon",
        "@turf/boolean-point-in-polygon",
        "geotiff",
        "ol",
      ],
    },
  },
});
