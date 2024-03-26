/** @type {import("@eodash/eodash").WebComponentWidget} */
export default {
  id: Symbol(),
  title: "Tools",
  layout: { x: 0, y: 0, w: 3, h: 12 },
  widget: {
    link: "https://cdn.skypack.dev/@eox/itemfilter",
    properties: {
      config: {
        titleProperty: "title",
        filterProperties: [
          {
            keys: ["title", "themes"],
            title: "Search",
            type: "text",
            expanded: true,
          },
          {
            key: "themes",
            title: "Theme",
            type: "multiselect",
            featured: true,
          },
        ],
        aggregateResults: "themes",
        enableHighlighting: true,
      },
    },
    onMounted: async function (el, store, _) {
      /** @type {any} */ (el).apply(store?.stac);
      /** @type {any} */ (el).config.onSelect = async (item) => {
        await store.loadSelectedSTAC(item.href);
      };
    },
    tagName: "eox-itemfilter",
  },
  type: "web-component",
};
