/** @type {import("@eodash/eodash").EodashCLiConfig} */
export default {
  base: "",
  dev: {
    port: 3001,
    host: false,
    open: false,
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  outDir: ".eodash/dist",
  cacheDir: ".eodash/temp",
};
