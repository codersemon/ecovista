// dependencies
import Image from "next/image";
import "../globals.css";

// Metadata
export const metadata = {
  title: "EcoVista Weather APP",
  description: "Developed by Emon Khan",
};

// component
export default function LocationLayout({
  children,
  aqi,
  temparature,
  wind,
  weather,
}) {
  return (
    <div className="wrapper">
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="background"
      />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {temparature}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
