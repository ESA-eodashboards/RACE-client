// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eox/storytelling");
      await import("../../.eodash/dist/eo-dash");
      await import("../../.eodash/dist/eo-dash.css");
    }
  },
};
