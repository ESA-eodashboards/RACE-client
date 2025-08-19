// https://vitepress.dev/guide/custom-theme
import ESA from "@eox/pages-theme-esa";

export default {
  extends: ESA,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eodash/eodash/webcomponent");
      if(!customElements.get('eox-storytelling')) await import("@eox/storytelling");
    }
  },
};
