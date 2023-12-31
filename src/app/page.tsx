"use client"

import * as Types from '@/layouts/types';

import React, { useEffect, useState } from 'react';
import Hero from '@/layouts/Hero'
import Heading from '@/layouts/Heading'
import ImageListBlock from '@/layouts/ImageListBlock'

export default function Home() {
  const [data, setData] = useState<Types.Response>();

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=home`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result  = await response.json();
      setData(result);
      console.log(result.docs[0])
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {data &&
        data.docs[0].layout.map((item: Types.Item, idx: number) => {
          return (
            <React.Fragment key={idx}>
              {item.blockType === 'Hero' && <Hero props={item as Types.Hero} />}
              {item.blockType === 'Heading' && <Heading props={item as Types.Heading} />}
              {item.blockType === 'ImageListBlock' && <ImageListBlock props={item as Types.ImageListBlock} />}
           </React.Fragment> 
          );
        })}
    </main>
  );
}

