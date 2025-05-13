import axios from "axios";

// Function to calculate the xx th percentile
/**
 *
 * @param {*} arr
 * @param {*} percentile
 * @returns
 */
export default function getPercentile(arr, percentile) {
  // Create a copy of the array and sort the copy
  const sortedArr = [...arr].filter((item) => item !== 0).sort((a, b) => a - b);
  // Calculate the index for the given percentile
  const index = (percentile / 100) * (sortedArr.length - 1);
  // If the index is an integer, return the value at that index
  return sortedArr[Math.round(index)];
}

/**
 *
 * @param {*} point
 * @param {*} bbox
 * @returns
 */
function isWithinBounds(point, bbox) {
  const [minX, minY, maxX, maxY] = bbox;
  return (
    point[0] >= minX && point[0] <= maxX && point[1] >= minY && point[1] <= maxY
  );
}
/**
 *
 * @param {*} bbox
 * @returns
 */
export async function getSpeciesList(bbox) {
  // Get wildlife species index
  const speciesIndex = await axios
    .get(
      "https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator2/Species_Index_Images_v2.json",
    )
    .then((response) => response.data);

  // Get locations of species
  const speciesLocations = await axios
    .get(
      "https://eox-ideas.s3.eu-central-1.amazonaws.com/indicator2/Europe_characteristic_species.geojson",
    )
    .then((response) => response.data);

  const accumulatedSpecies = speciesLocations.features
    //@ts-expect-error
    .filter((point) => isWithinBounds(point.geometry.coordinates, bbox))
    //@ts-expect-error
    .flatMap((point) => point.properties.species_indices)
    //@ts-expect-error
    .map((index) => speciesIndex.find((species) => species.index === index))
    //@ts-expect-error
    .filter((species) => species != null)
    //@ts-expect-error
    .reduce((accumulator, species) => {
      // Check if the species with this index already exists in the accumulator
      if (accumulator[species.index]) {
        // If it exists, increment the count
        //
        // We have no choice but to mutate the function argument. (no-param-reassign)
        // eslint-disable-next-line
        accumulator[species.index].count++;
      } else {
        // If it does not exist, create a new entry with count initialized to 1
        //
        // eslint-disable-next-line
        accumulator[species.index] = { ...species, count: 1 };
      }
      return accumulator;
    }, {});

  // Sort the species by count of appearance and take the top 5
  const sortedSpecies = Object.values(accumulatedSpecies)
    // .filter((item) => item.common_name && item.common_name !== 'Unknown')
    // eslint-disable-next-line
    // .filter((item) => item.image_url && /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(item.image_url))
    .sort((a, b) => b.count - a.count);
  const speciesWithCommonName = sortedSpecies.filter(
    (item) => item.common_name && item.common_name !== "Unknown",
  );
  if (speciesWithCommonName.length < 5) {
    return sortedSpecies.slice(0, 5);
  }
  return speciesWithCommonName.slice(0, 5);
}
