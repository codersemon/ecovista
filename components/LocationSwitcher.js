"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LocationSwitcher = ({ locations }) => {
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShowLocationPicker(!showLocationPicker)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={30}
          height={30}
        />
      </button>
      {showLocationPicker && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2 h-56 overflow-y-scroll">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations?.length > 0
              ? locations
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  ?.map((location) => (
                    <li key={location.id}>
                      <Link
                        href={`/${location.name}?latitude=${location.lat}&longitude=${location.long}`}
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))
              : ""}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
