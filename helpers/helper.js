/**
 * Take value and provide text based on value for AirQualityIndex api
 * @param {*} val
 * @returns
 */
export const getAirQualityText = (val) => {
  switch (val) {
    case 1:
      return "Good";
    case 2:
      return "Fair";
    case 3:
      return "Moderate";
    case 4:
      return "Poor";
    case 5:
      return "Very Poor";
    default:
      return "Unknown";
  }
};
