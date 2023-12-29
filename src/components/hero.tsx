"use client"

import React, { useEffect, useState } from 'react';

interface NavigationItem {
  headingOne: string;
  mainHeading: string;
}

export default function Navbar() {
  const [navigationLinks, setNavigationLinks] = useState<NavigationItem>();

  const fetchNavigationLinks = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/hero`);
      const data = await res.json();
      setNavigationLinks(data);
    } catch (error) {
      console.error('Error fetching navigation links:', error);
    }
  };

  useEffect(() => {
    fetchNavigationLinks();
  }, []); 

  return (
    <section className="splashpage h-screen grid place-items-center text-center">
      <div className="bg-black opacity-40 w-full h-full absolute top-0"></div>
      {navigationLinks ? (
        <Navigation navigationLinks={navigationLinks} />
      ) : (
        <div className="z-10 animate-pulse">
          <div className="h-8 w-52 bg-gray-200 mb-10 mx-auto"></div>
          <div className="h-32 w-[50rem] bg-gray-200"></div>
        </div>
      )}
    </section>
  );
}

function Navigation({ navigationLinks }: { navigationLinks: NavigationItem }) {
  return (
    <div className="z-10">
      <h1 className="text-xl text-white"><span className="tracking-[1rem] font-light text-2xl">{navigationLinks.headingOne}</span><br/><span className="text-9xl leading-[1.4] font-semibold">{navigationLinks.mainHeading}</span></h1>
    </div>
  );
}

