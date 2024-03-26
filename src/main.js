import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";
import backgroundMap from "./backgroundMap";

export default createEodash((store) => ({
  id: "template-id",
  stacEndpoint:
    "https://esa-eodash.github.io/RACE-catalog/RACE/catalog.json",
  routes: [],
  brand: {
    name: "RAPID ACTION FOR CITIZENS WITH EARTH OBSERVATION",
    shortName: "RACE",
    font: {
      link: "style.css",
      family: "NotesESABold",
    },
    logo: "logo.png",
    theme: {
      colors: {
        primary: "#003247",
        secondary: "#003247",
        background: "#fff",
        surface: "#fff",
      },
    },
    meta: {
      title: "Rapid Action for Citizens with Earth Observation",
      content: 'Dashboard for ESA EO data examples'
    }
  },
  template: {
    gap: 6,
    background: {
      id: Symbol(),
      type: "internal",
      widget: {
        name: 'EodashMap'
      }
    },
    widgets: [
      tools,
      {
        id: Symbol(),
        type: "internal",
        title: "datepicker",
        layout: { x: 5, y: 11, w: 2, h: 1 },
        widget: {
          name: 'EodashDatePicker',
          props: {
            inline: true,
          },
        }
      },
      basedOnWms(store.states),
      // container(store.states)
    ],
  },
}));
