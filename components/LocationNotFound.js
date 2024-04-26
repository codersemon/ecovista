import Link from "next/link";
import Card from "./Card";

const LocationNotFound = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center h-full gap-2">
        <h1>
          No location matched with{" "}
          <span className="text-blue-500">{location}</span>
        </h1>
        <Link href="/" className="bg-[#19243B] px-3 py-1 inline-block rounded">
          Detect current location
        </Link>
      </div>
    </Card>
  );
};

export default LocationNotFound;
