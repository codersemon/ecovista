import AQIComponent from "@/components/AQIComponent";
import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info";

const AQISlot = async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolvedLatLon = await getResolvedLatLong(location, latitude, longitude);

  if(resolvedLatLon){
    return <AQIComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon.lon} />;
  }else{
   return <LocationNotFound location={location} />
  }
};

export default AQISlot;
