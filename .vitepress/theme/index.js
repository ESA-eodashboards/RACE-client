// import { defineConfig } from "vitepress";
// import baseConfig from "@eox/pages-theme-eox/config";
import { h } from "vue";
import DefaultTheme from "vitepress/theme";

// export default defineConfig({
export default {
  extends: DefaultTheme,
  // extends: baseConfig("RACE"),
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import ("@eox/map");
      await import ("@eox/chart");
      await import ("@eox/drawtools");
      await import ("@eox/jsonform");
      await import ("@eox/stacinfo");
      await import ("@eox/layercontrol");
      await import ("color-legend-element");
      await import ("@eox/timecontrol");
      await import ("@eox/ui");
      await import("../../.eodash/dist/eo-dash");
      await import("../../.eodash/dist/eo-dash.css");
    }
  },
};
