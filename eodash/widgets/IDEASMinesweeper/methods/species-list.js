/**
 *
 * @param {*} conservationStatus
 * @returns
 */
export function getIucnBackgroundColor(conservationStatus) {
  switch (conservationStatus) {
    case "least concern":
      return "#006666";
    case "near threatened":
      return "#006666";
    case "vulnerable":
      return "#CC9900";
    case "endangered":
      return "#CC6633";
    case "critically endangered":
      return "#CC3333";
    case "extinct in the wild":
      return "#000";
    case "extinct":
      return "#000";
    default:
      return "#777";
  }
}
/**
 *
 * @param {*} conservationStatus
 * @returns
 */
export function getIucnShorthand(conservationStatus) {
  switch (conservationStatus) {
    case "least concern":
      return "LC";
    case "near threatened":
      return "NT";
    case "vulnerable":
      return "VU";
    case "endangered":
      return "EN";
    case "critically endangered":
      return "CR";
    case "extinct in the wild":
      return "EW";
    case "extinct":
      return "EX";
    default:
      return "LC";
  }
}
/**
 *
 * @param {*} conservationStatus
 * @returns
 */
export function getIucnTextColor(conservationStatus) {
  switch (conservationStatus) {
    case "least concern":
      return "#fff";
    case "near threatened":
      return "#fffb";
    case "vulnerable":
      return "#fffb";
    case "endangered":
      return "#fffb";
    case "critically endangered":
      return "#fffb";
    case "extinct in the wild":
      return "#fff";
    case "extinct":
      return "#CC3333";
    default:
      return "#777";
  }
}
