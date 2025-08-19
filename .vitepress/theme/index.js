// https://vitepress.dev/guide/custom-theme
import ESA from "@eox/pages-theme-esa";
import Layout from "./Layout.vue";

export default {
  extends: ESA,
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eodash/eodash/webcomponent");
      if(!customElements.get('eox-storytelling')) await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import ("@eox/map");
      await import ("@eox/map/src/plugins/advancedLayersAndSources");
      await import ("@eox/chart");
      await import ("@eox/drawtools");
      await import ("@eox/jsonform");
      await import ("@eox/stacinfo");
      await import ("@eox/layercontrol");
      await import ("color-legend-element");
      await import ("@eox/timecontrol");
      await import ("@eox/ui");
    }
  },
};
