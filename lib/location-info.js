/**
 * latitude & longitude to Location information by "reverse geocode clien api"
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getLocationData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Location list fetcher function
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getLocationLatLongList = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/location`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * location name to location latitude & longitude getter api fetch
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getLocationLatLong = async (locationName) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/location/${locationName}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Get latitude & longitude form location name or lat & lon arguments
 * @param {*} location 
 * @param {*} lat 
 * @param {*} lon 
 * @returns lat & lon or undefined
 */
export const getResolvedLatLong = async (location, lat, lon) => {
  // return latitude & longitude if have in argument
  if (lat && lon) {
    return { lat, lon };
  }

  // get lat long from api by location name
  const locationInfo = await getLocationLatLong(location);

  // return latitude & longitude if have in database
  if (locationInfo?.lat && locationInfo?.long) {
    return { lat: locationInfo.lat, lon: locationInfo.long };
  }
};
