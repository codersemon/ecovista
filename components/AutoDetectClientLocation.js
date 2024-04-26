"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
//dependencies
import { useEffect, useState } from "react";

const AutoDetectClientLocation = () => {
  // loading state to show detecting UI
  const [isLoading, setIsLoading] = useState(false);

  // router, path, search params
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // set loading true to show detecting client location
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // set search params from current position longitude & latitude
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);

        // disable loader
        setIsLoading(false);

        // redirect to current location page
        router.push(`/current/?${params.toString()}`);
      });
    }
  }, [searchParams, pathName, router]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {isLoading && (
        <>
          <Image
            src="/network.gif"
            width={500}
            height={500}
            alt="Location Detector"
            unoptimized
          />
          <p className="text-3xl my-2 animate-pulse">Detecting Location....</p>
        </>
      )}
    </div>
  );
};

export default AutoDetectClientLocation;
