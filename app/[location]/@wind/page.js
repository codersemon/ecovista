import LocationNotFound from "@/components/LocationNotFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindSlot = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolvedLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );

  if (resolvedLatLon) {
    return <WindComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon.lon} />;
  } else {
    return <LocationNotFound location={location} />;
  }
};

export default WindSlot;
