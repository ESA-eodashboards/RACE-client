import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";
import backgroundMap from "./backgroundMap";

export default createEodash((store) => ({
  id: "template-id",
  stacEndpoint:
    "https://eodash.github.io/catalog-template/template_catalog/catalog.json",
  routes: [],
  brand: {
    name: "Dashboard",
    font: {
      family: "Poppins",
    },
    theme: {
      colors: {
        primary: "#880808",
        secondary: "#AA4A44",
        background: "#d3d3d3",
        surface: "#d3d3d3",
      },
    },
  },
  template: {
    gap: 6,
    background: backgroundMap(store.states),
    widgets: [tools, basedOnWms(store.states), container(store.states)],
  },
}));
