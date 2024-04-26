import { getCurrentTemparatureData } from "@/lib/weather-info";
import Image from "next/image";

const TemparatureComponent = async ({ lat, lon }) => {
  const tempData = await getCurrentTemparatureData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
            width={100}
            height={100}
          />
          <h3 className="feature-title">{tempData?.temp}°C</h3>
          <span className="feature-name">
            Feels Like {tempData?.feels_like}°C
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemparatureComponent;
