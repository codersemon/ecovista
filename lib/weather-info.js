/**
 * Current weather information from openweaher api
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getCurrentWeatherData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return data?.weather[0];
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Current temparature information from openweaher api
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getCurrentTemparatureData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return data?.main;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Current wind information from openweaher api
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getCurrentWindData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    const { speed, deg } = data?.wind;
    return { speed: (speed * 3.6).toFixed(2), deg: deg.toFixed(0) };
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Current Air Quality Index information from openweaher api
 * @param {*} lat
 * @param {*} lon
 * @returns
 */
export const getCurrentAQIData = async (lat, lon) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = await res.json();
    return data?.list[0];
  } catch (error) {
    console.log(error.message);
  }
};
