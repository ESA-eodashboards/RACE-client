function isMobile() {
  // only on app start but good for now
  const minWidth = 768;
  return window.innerWidth < minWidth || screen.width < minWidth;
}
export default {
  id: "race",
  options: {
    useSubCode: true
  },
  stacEndpoint:
    "https://esa-eodashboards.github.io/RACE-catalog/RACE/catalog.json",
  brand: {
    noLayout: true,
    name: "RACE",
    theme: {
      colors: {
        primary: "#003247",
        secondary: "#00ae92",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.6,
        "primary-opacity": 0.8,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#009E73",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "Demo configuration of eodash client",
  },
  templates: {
    expert: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-expert",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: true,
              enableBackToPOIs: true,
            },
            btnsPosition: {
              x: "12/8/9",
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          //@ts-expect-error
          defineWidget(collection) {
            if (
              ![
                "IDEAS2_wildlife_minesweeper",
                "IDEAS1_hopi_minesweeper",
              ].includes(collection?.id ?? "")
            ) {
              return null;
            }

            const minesweeperOptions =
              /** @type {import("./widgets/types.d.ts").MinesweeperOptions} */ (
                collection?.id === "IDEAS2_wildlife_minesweeper"
                  ? {
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
                    }
                  : {
                      // Board dimensions in number of hex cells
                      size: 20,
                      minColor: {
                        // light yellow
                        r: 255,
                        g: 255,
                        b: 170,
                        a: 0.5,
                      },
                      maxColor: {
                        // orange
                        r: 255,
                        g: 100,
                        b: 0,
                        a: 0.6,
                      },
                      minValue: 0,
                      maxValue: 0.5,
                      geotiff: {
                        projection: "EPSG:4326",
                        url: "https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator1/indicator1_v1_houhpi_Summer_europe_4326_b1.tif",
                      },
                      locations: [
                        {
                          name: "Global Coverage",
                          bbox: [-24, 33, 42, 71],
                          /// How wide the bounding box should be as a longitudinal extent.
                          horizontalExtent: 5,
                          isMineCondition: 80, // 80th percentile mine threshold
                        },
                      ],
                    }
              );

            return {
              id: "Minesweeper",
              layout: { x: 4, y: 0, w: 3, h: 1 },
              title: "Minesweeper",
              type: "internal",
              widget: {
                name: "IDEASMinesweeper",
                properties: {
                  minesweeperOptions,
                },
              },
            };
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "light",
              layoutIcon:
                "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8,
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  title: "Information",
                  layout: { x: "8/8/9", y: 0, w: "4/4/3", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 6, w: 4, h: 6 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Processes",
                  layout: { x: "8/8/9", y: 6, w: "4/4/3", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
      ],
    },
    light: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-light",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: false,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: false,
              enableSearch: true,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          //@ts-expect-error
          defineWidget(collection) {
            if (
              ![
                "IDEAS2_wildlife_minesweeper",
                "IDEAS1_hopi_minesweeper",
              ].includes(collection?.id ?? "")
            ) {
              return null;
            }

            const minesweeperOptions =
              /** @type {import("./widgets/types.d.ts").MinesweeperOptions} */ (
                collection?.id === "IDEAS2_wildlife_minesweeper"
                  ? {
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
                    }
                  : {
                      // Board dimensions in number of hex cells
                      size: 20,
                      minColor: {
                        // light yellow
                        r: 255,
                        g: 255,
                        b: 170,
                        a: 0.5,
                      },
                      maxColor: {
                        // orange
                        r: 255,
                        g: 100,
                        b: 0,
                        a: 0.6,
                      },
                      minValue: 0,
                      maxValue: 0.5,
                      geotiff: {
                        projection: "EPSG:4326",
                        url: "https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator1/indicator1_v1_houhpi_Summer_europe_4326_b1.tif",
                      },
                      locations: [
                        {
                          name: "Global Coverage",
                          bbox: [-24, 33, 42, 71],
                          /// How wide the bounding box should be as a longitudinal extent.
                          horizontalExtent: 5,
                          isMineCondition: 80, // 80th percentile mine threshold
                        },
                      ],
                    }
              );

            return {
              id: "Minesweeper",
              layout: { x: 4, y: 0, w: 3, h: 1 },
              title: "Minesweeper",
              type: "internal",
              widget: {
                name: "IDEASMinesweeper",
                properties: {
                  minesweeperOptions,
                },
              },
            };
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "expert",
              layoutIcon:
                "M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z",
              itemFilterConfig: {
                enableHighlighting: false,
                aggregateResults: "collection_group",
                resultType: "cards",
                filtersTitle: "",
                filterProperties: [],
                resultsTitle: "Explore more indicators",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                cssVars: {
                  "--filter-display": "none",
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 10 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      slider: false,
                      tools: ["info", "legend"],
                      cssVars: {
                        "--list-padding": "-8px",
                        "--tools-button-visibility": "none",
                        "--layer-input-visibility": "none",
                        "--layer-type-visibility": "none",
                        "--padding": "8px",
                        "--padding-vertical": "16px",
                        "--layer-tools-button-visibility": "none",
                        "--layer-summary-visibility": "none",
                        "--layer-visibility": "none",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      tags: [],
                      header: [],
                      footer: [],
                      body: ["description"],
                      styleOverride: "",
                      featured: [],
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
    demo: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-demo",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: false,
            zoomToExtent: false,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: false,
              enableSearch: false,
            },
            btnsPosition: {
              x: 12,
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "expert",
              itemFilterConfig: {
                enableHighlighting: false,
                resultType: "cards",
                filtersTitle: "",
                filterProperties: [],
                resultsTitle: "Explore more indicators",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                aggregateResults: "collection_group",
                cssVars: {
                  "--filter-display": "none",
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 10, w: "3/3/2", h: 2 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      slider: false,
                      tools: ["legend"],
                      cssVars: {
                        "--list-padding": "-16px",
                        "--tools-button-visibility": "none",
                        "--layer-input-visibility": "none",
                        "--layer-type-visibility": "none",
                        "--padding": "8px",
                        "--padding-vertical": "16px",
                        "--layer-tools-button-visibility": "none",
                        "--layer-toggle-button-visibility": "flex",
                        "--layer-summary-visibility": "none",
                        "--layer-visibility": "none",
                        "margin-top": "-34px",
                        "--item-hover-color": "transparent",
                      },
                      title: false,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Information",
                  layout: { x: "0", y: 1, w: "3/3/2", h: 9 },
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      tags: [],
                      header: [],
                      footer: [],
                      body: ["description"],
                      styleOverride: "",
                      featured: [],
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: "9/9/10", y: 7, w: "3/3/2", h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      hideInputField: true,
                      hideArrows: true,
                      style: "margin-right: 0",
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: false,
              enableSearch: true,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8,
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title", "themes"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "themes",
                    title: "Themes",
                    placeholder: "Filter by theme",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                  {
                    key: "tags",
                    title: "Tags",
                    placeholder: "Filter by tags",
                    type: "multiselect",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8,
                },
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
