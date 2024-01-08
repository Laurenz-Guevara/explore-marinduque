"use client"

import { Footer } from '@/layouts/types';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Footer() {
  const [data, setData] = useState<Footer>();

  const fetchFooter = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/footer`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching navigation links:', error);
    }
  }

  useEffect(() => {
    fetchFooter();
  }, []); 

  return (
    <footer className="bg-offwhite py-10">
      <div className="container">
        { data && <Image className="rounded-xl object-cover h-52 w-52 mx-auto" src={data.logo.url} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} />}
        <div className="flex justify-center space-x-10 pt-10 border-b pb-10 border-gray-300">
          {data && data.footerItems.map((item) => (
            <div key={item.id}>
              <p className="text-quaternary font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-10 text-center">
          <p>{data?.footerText}</p>
        </div>
      </div>
    </footer>
  );
}

