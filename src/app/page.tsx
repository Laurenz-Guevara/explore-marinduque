"use client"

import * as Types from '@/layouts/types';

import React, { useEffect, useState } from 'react';
import HeroBlock from '@/layouts/HeroBlock'
import HeadingBlock from '@/layouts/HeadingBlock'
import ImageListBlock from '@/layouts/ImageListBlock'
import CarouselBlock from '@/layouts/CarouselBlock'

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
              {item.blockType === 'Hero' && <HeroBlock props={item as Types.HeroBlock} />}
              {item.blockType === 'Heading' && <HeadingBlock props={item as Types.HeadingBlock} />}
              {item.blockType === 'ImageListBlock' && <ImageListBlock props={item as Types.ImageListBlock} />}
              {item.blockType === 'Carousel' && <CarouselBlock props={item as Types.CarouselBlock} />}
           </React.Fragment> 
          );
        })}
    </main>
  );
}

