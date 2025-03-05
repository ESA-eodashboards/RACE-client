export default {
  id: "app",
  stacEndpoint:
    "https://eurodatacube.github.io/eodash-catalog/trilateral/catalog.json",
  brand: {
    noLayout: true,
    name: "runtime config 2",
    font: { family: "Noto Sans" },
    theme: {
      colors: {
        primary: "#AE9537",
        surface: "#f2f4f3",
        secondary: "#AE9537",
      },
    },
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#a34b20",
        },
      },
    },
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: "EodashMap",
      },
    },
    widgets: [
      {
        layout: { x: 0, y: 0, w: 3, h: 12 },
        title: "Tools",
        id: Symbol(),
        type: "internal",
        widget: {
          name: "EodashItemFilter",
        },
      },
      {
        layout: { x: 4, y: 0, w: 4, h: 4 },
        title: "Date Picker",
        id: Symbol(),
        type: "internal",
        widget: {
          name: "EodashDatePicker",
        },
      },
    ],
  },
};
