import LocationNotFound from "@/components/LocationNotFound";
import TemparatureComponent from "@/components/TemparatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const TemparatureSlot = async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolvedLatLon = await getResolvedLatLong(location, latitude, longitude);

  if(resolvedLatLon){
    return <TemparatureComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon.lon} />;
  }else{
    return <LocationNotFound location={location} />
  }
};

export default TemparatureSlot;
