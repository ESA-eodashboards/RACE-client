import { createEodash } from "@eodash/eodash";

export default createEodash((store) => ({
  id: "template-id",
  stacEndpoint:
    "https://esa-eodash.github.io/RACE-catalog/RACE/catalog.json",
  routes: [],
  brand: {
    name: "RAPID ACTION FOR CITIZENS WITH EARTH OBSERVATION",
    shortName: "RACE",
    font: {
      link: "style.css",
      family: "NotesESABold",
    },
    logo: "logo.png",
    theme: {
      colors: {
        primary: "#003247",
        secondary: "#003247",
        background: "#fff",
        surface: "#fff",
      },
    },
    meta: {
      title: "Rapid Action for Citizens with Earth Observation",
      content: 'Dashboard for ESA EO data examples'
    }
  },
  template: {
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
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          // enableCompare: true,
        },
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        title: "Indicators",
        layout: { x: 0, y: 0, w: 3, h: 8 },
        widget: {
          name: "EodashItemFilter",
          properties: {
            // enableCompare: true,
            aggregateResults: "themes",
          },
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layer Control",
        layout: { x: 0, y: 8, w: 3, h: 4 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 12 },
                type: "web-component",
                widget: {
                  link: async () => await import("@eox/stacinfo"),
                  properties: {
                    for: store.states.currentUrl,
                    allowHtml: "true",
                    styleOverride: `.single-property {columns: 1!important;}
                      h1 {margin:0px!important;font-size:16px!important;}
                      header h1:after {
                        content:' ';
                        display:block;
                        border:1px solid #d0d0d0;
                      }
                      h2 {font-size:15px}
                      h3 {font-size:14px}
                      summary {cursor: pointer;}
                      #properties li > .value { font-weight: normal !important;}
                      main {padding-bottom: 10px;}
                      .footer-container {line-height:1;}
                      .footer-container button {margin-top: -10px;}
                      .footer-container small {font-size:10px;line-height:1;}`,
                    header: '["title"]',
                    tags: '["themes"]',
                    subheader: "[]",
                    properties: '["satellite","sensor","agency","extent"]',
                    featured: '["description","providers","assets","links"]',
                    footer: '["sci:citation"]',
                  },
                  tagName: "eox-stacinfo",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Datepicker",
                type: "internal",
                layout: { x: 5, y: 10, w: 1, h: 1 },
                title: "Datepicker",
                widget: {
                  name: "EodashDatePicker",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: "Buttons",
                layout: { x: 8, y: 0, w: 1, h: 1 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                },
              }
            : null;
        },
      },
    ],
  },
}));
