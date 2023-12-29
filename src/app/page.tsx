"use client"

import React, { useEffect, useState } from 'react';
import Hero from '@/layouts/hero'

interface Item {
  id: string;
  blockType: string;
  headingOne?: string;
  mainHeading?: string;
}

interface Response {
  docs: Array<Docs>;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean | null;
  nextPage: boolean | null;
}

interface Docs {
  id: number;
  title: string;
  layout: Array<Item>;
  slug: string;
}

export default function Home() {
  const [data, setData] = useState<Response>();

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pages?where[slug][equals]=home');
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
        data.docs[0].layout.map((item: Item, idx: number) => {
          return (
            <React.Fragment key={idx}>
              {item.blockType === 'Hero' && <Hero props={item} />}
           </React.Fragment> 
          );
        })}
    </main>
  );
}

