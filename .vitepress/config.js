import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-esa/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig,
  srcDir: ".",
  title: "RACE Dashboard",
  description: "Rapid Action for Citizens with Earth Observation",

  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite: {
    envPrefix:["VITE_", "EODASH_"],
    ssr: {
      noExternal: ["@eox/pages-theme-esa"],
    },
  },
  themeConfig: {
    logo: "/assets/RACE_Logo.png",
    nav: [
      { text: "Dashboard", link: "/explore" },
      { text: "Use cases", link: "/" },
      { text: "Applications & Tools", link: "/" },
      { text: "Resources", link: "/" },
      { text: "Ecosystems", link: "/" },
      { text: "Partnerships", link: "/" },
    ],
    footer: {
      small: true,
      title: "<img src='/assets/1_European_Commission.png' style='height: 32px' /><img src='/assets/2_ESA.png' style='height: 32px' />",
      items: [
        {
          title: "FAQ",
          href: "/",
        },
        {
          title: "About",
          href: "/",
        },
        {
          title: "Link 1",
          href: "/",
        },
        {
          title: "Link 2",
          href: "/",
        }
      ]
    }
  },
  head: [
    ["link", { rel: "icon", href: "/assets/RACE_KV_2022_favicon.png" }],
    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://race.esa.int",
      },
    ],
    ["meta", { property: "og:title", content: "Rapid Action for Citizens with Earth Observation" }],
    [
      "meta",
      {
        property: "og:description",
        content: "This dashboard aims to showcase the power of Earth Observations to inform on societal global challenges. It is a cooperation between The European Space Agency and the European Commission.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://race.esa.int/assets/RACE_KV_2022.jpg",
      },
    ],
    // Twitter
    ["meta", { property: "twitter:card", content: "https://race.esa.int/assets/RACE_KV_2022_small.jpg" }],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://race.esa.int",
      },
    ],
    ["meta", { property: "twitter:title", content: "Rapid Action for Citizens with Earth Observation" }],
    [
      "meta",
      {
        property: "twitter:description",
        content: "This dashboard aims to showcase the power of Earth Observations to inform on societal global challenges. It is a cooperation between The European Space Agency and the European Commission.",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content:
          "https://race.esa.int/assets/RACE_KV_2022.jpg",
      },
    ],
    [
      "script",
      {},
      `
      var _paq = (window._paq = window._paq || []);
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(["requireCookieConsent"]);
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
        var u = "https://nix.eox.at/piwik/";
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "11"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      })();
    `,
    ],
  ],
});
