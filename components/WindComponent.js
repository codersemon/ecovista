import { getCurrentWindData } from "@/lib/weather-info";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getCurrentWindData(lat, lon);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_wind.png"
            alt="rain icon"
            width={100}
            height={100}
          />
          <h3 className="feature-title">{speed} km/h</h3>
          <span className="feature-name">{deg} degrees</span>
        </div>
      </div>
    </div>
  );
};

export default WindComponent;
