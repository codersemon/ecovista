import LocationNotFound from "@/components/LocationNotFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherSlot = async({  params: { location }, searchParams: { latitude, longitude }}) => {
  const resolvedLatLon = await getResolvedLatLong(location, latitude, longitude);

  if(resolvedLatLon){
    return <WeatherComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon.lon} />;
  }else{
    return <LocationNotFound location={location} />
  }
};

export default WeatherSlot;
