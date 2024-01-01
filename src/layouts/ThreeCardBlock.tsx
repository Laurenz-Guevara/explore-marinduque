import * as Types from '@/layouts/types';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'

export default function ThreeCardBlock() {
  const [data, setData] = useState<Types.AccommodationBlock>();
  // const [query, setQuery] = useState('?where[location][equals]=Boac');
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      console.log('Query length', query.length, query.length > 0)
      const response = await fetch(
        query.length > 0
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/accommodation${query}`
          : `${process.env.NEXT_PUBLIC_API_URL}/api/accommodation`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-3 container gap-x-10">
      {data &&
        data.docs.slice(0, 3).map((item: Types.Accommodation, idx: number) => {
          return (
            <div key={idx} className="">
              <Image className="rounded-xl object-cover h-full" src={item.media.url} alt={item.media.alt} width={item.media.width} height={item.media.height} />
              <div className="pt-2">
                <p className="text-primary text-3xl font-bold">{item.location}</p>
                <p className="text-tertiary text-xl">£{item.price}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}

