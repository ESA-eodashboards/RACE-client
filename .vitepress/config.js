import { defineConfig } from "vitepress";
// import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
  },
  themeConfig: {
    logo: "/assets/RACE_Logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/explore" },
    ],
  },
});
