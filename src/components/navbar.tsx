"use client"

import React, { useEffect, useState, Suspense } from 'react';
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
      const res = await fetch(`http://localhost:3000/api/globals/header`);
      const data = await res.json();
      console.log("fetch", data)
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
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation navigationLinks={navigationLinks} />
      </Suspense>
    </div>
  );
}

function Navigation({ navigationLinks }: { navigationLinks: NavigationItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-20 text-base">
        {navigationLinks.map((item, id) => (
          <NavigationMenuItem key={id}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className="">
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

