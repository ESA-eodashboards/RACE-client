import { defineConfig } from "vitepress";

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
      { text: "Dashboard", link: "/uc1dashboard/" },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      // { text: 'Stories', link: '/stories/' },
      { text: "Editor", link: "/editor/" },
    ],
  },
});
