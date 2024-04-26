import LocationInfoComponent from "@/components/LocationInfoComponent";
import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationDynamicPage = async({params: {location}, searchParams: {latitude, longitude}}) => {
  const resolvedLatLon = await getResolvedLatLong(location, latitude, longitude);

  if(resolvedLatLon){
    return <LocationInfoComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon.lon} />;
  }else{
    return <LocationNotFound location={location} />
  }

};

export default LocationDynamicPage;
