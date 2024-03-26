/**
 *  @type {(states:import("@eodash/eodash").EodashStore["states"])
 * =>import("@eodash/eodash").Widget}
 **/
export default ({ currentUrl, mapInstance }) => ({
  id: Symbol(),
  title: "Container",
  type: "internal",
  layout: { x: 4, y: 8, w: 4, h: 3 },
  widget: {
    name: "WidgetsContainer",
    props: {
      widgets: [
        {
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
        },
        {
          defineWidget: (selectedSTAC) => {
            const legendURL = selectedSTAC?.assets?.legend?.href ?? false;
            return legendURL
              ? {
                  id: legendURL,
                  title: "Legend",
                  type: "web-component",
                  widget: {
                    link: "https://unpkg.com/progressive-image-element@latest/dist/index.js",
                    tagName: "progressive-image",
                    properties: {
                      src: legendURL,
                    },
                    onMounted(el) {
                      const img = document.createElement("img");
                      img.src = legendURL;
                      el.appendChild(img);
                    },
                  },
                }
              : {
                  id: "reset-zoom",
                  title: "Reset Zoom",
                  type: "web-component",
                  widget: {
                    link: new URL(
                      "/reset-zoom-btn/ResetZoom.S2AXqNgZ.js",
                      import.meta.url
                    ).href,
                    tagName: "reset-zoom-btn",
                    properties: {
                      map: mapInstance,
                      to: 6,
                    },
                  },
                };
          },
        },
      ],
    },
  },
});
