import { getCurrentWeatherData } from "@/lib/weather-info";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
  const { id, main, description } = await getCurrentWeatherData(lat, lon);

  let weatherIcon = "";
  switch (id) {
    case 200:
      weatherIcon = "https://openweathermap.org/img/wn/11d@2x.png";
      break;
    case 300:
      weatherIcon = "https://openweathermap.org/img/wn/11d@2x.png";
      break;
    case 500:
      weatherIcon = "https://openweathermap.org/img/wn/10d@2x.png";
      break;
    case 600:
      weatherIcon = "https://openweathermap.org/img/wn/13d@2x.png";
      break;
    case 800:
      weatherIcon = "https://openweathermap.org/img/wn/01d@2x.png";
      break;
    case 801:
      weatherIcon = "https://openweathermap.org/img/wn/02d@2x.png";
      break;
    case 802:
      weatherIcon = "https://openweathermap.org/img/wn/03d@2x.png";
      break;
    case 803:
      weatherIcon = "https://openweathermap.org/img/wn/04d@2x.png";
      break;
    case 804:
      weatherIcon = "https://openweathermap.org/img/wn/04d@2x.png";
      break;
    default:
      weatherIcon = "https://openweathermap.org/img/wn/01d@2x.png";
      break;
  }

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Weather</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src={weatherIcon}
            alt="rain icon"
            width={100}
            height={100}
          />
          <h3 className="feature-title">{main}</h3>
          <span className="feature-name">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
