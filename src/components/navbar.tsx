"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface NavigationItem {
  title: string;
  href: string;
  id: string;
}

export default function Navbar() {

  const [navigationLinks, setNavigationLinks] = useState([]);

  const fetchNavigationLinks = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/header`);
      const data = await res.json();
      setNavigationLinks(data.navItems);
    } catch (error) {
      console.error('Error fetching navigation links:', error);
    }
  }

  useEffect(() => {
    fetchNavigationLinks();
  }, []); 

  return (
    <div>
        <Navigation navigationLinks={navigationLinks} />
    </div>
  );
}

function Navigation({ navigationLinks }: { navigationLinks: NavigationItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-20 text-base">
        {navigationLinks.length > 0 ? navigationLinks.map((item, id) => (
          <NavigationMenuItem key={id}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="">
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )) : (
            <div className="flex space-x-20">
              <div className="h-5 w-20 animate-pulse bg-gray-200"></div>
              <div className="h-5 w-20 animate-pulse bg-gray-200"></div>
              <div className="h-5 w-20 animate-pulse bg-gray-200"></div>
              <div className="h-5 w-20 animate-pulse bg-gray-200"></div>
            </div>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

