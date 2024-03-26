let handleMoveEnd = null;

/**
 * @type {(states:import("@eodash/eodash").EodashStore['states'])
 * =>import("@eodash/eodash").FunctionalWidget}
 **/
export default ({ mapInstance, currentUrl }) => ({
  layout: { x: 9, y: 0, w: 3, h: 12 },
  defineWidget: (selectedSTAC) => {
    const wmsLink = selectedSTAC?.links.find((l) => l.rel == "wms") ?? false;
    return wmsLink
      ? {
          id: `${wmsLink["wms:layers"][0]} Map`,
          title: "Map",
          type: "web-component",
          widget: {
            link: "https://cdn.skypack.dev/@eox/map",
            properties: {
              class: "fill-height fill-width",
              center: [15, 48],
              layers: [
                {
                  type: "Tile",
                  source: {
                    type: "TileWMS",
                    url: wmsLink.href,
                    params: {
                      LAYERS: wmsLink["wms:layers"],
                      TILED: true,
                    },
                    ratio: 1,
                    serverType: "geoserver",
                  },
                },
              ],
            },
            tagName: "eox-map",
          },
        }
      : {
          id: "Information",
          title: "Information",
          type: "web-component",
          widget: {
            link: () => import("@eox/stacinfo"),
            tagName: "eox-stacinfo",
            properties: {
              for: currentUrl,
              allowHtml: "true",
              styleOverride:
                "#properties li > .value {font-weight: normal !important;}",
              header: "[]",
              subheader: "[]",
              properties: '["description"]',
              featured: "[]",
              footer: "[]",
            },
          },
        };
  },
});
