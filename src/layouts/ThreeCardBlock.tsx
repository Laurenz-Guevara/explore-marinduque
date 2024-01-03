"use client"

import * as Types from '@/layouts/types';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ThreeCardBlock() {
  const [data, setData] = useState<Types.AccommodationBlock>();
  // const [query, setQuery] = useState('?where[location][equals]=Boac');
  const [query, setQuery] = useState('');
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")


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
    <section className="h-full relative">
      <div className="absolute bottom-0 h-3/4 w-full bg-offwhite -z-10"></div>
      <div className="container">
        <div className="grid grid-cols-3 gap-x-10">
          {data &&
            data.docs.slice(0, 3).map((item: Types.Accommodation, idx: number) => {
              return (
                <div key={idx} className="grid">
                  <Image className="rounded-xl object-cover h-full aspect-square" src={item.media.url} alt={item.media.alt} width={item.media.width} height={item.media.height} />
                  <div className="pt-2 relative">
                    <p className="text-primary text-3xl font-bold">{item.location} test</p>
                    <p className="text-tertiary text-xl">£{item.price} test</p>
                  </div>
                </div>
              );
            })}
          <div className="py-10 w-full">
            { data && <ComboboxDemo frameworks={data.docs} />}
          </div>
        </div>
      </div>
    </section>
  );
}


 
export function ComboboxDemo( {frameworks} : {frameworks: any}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.locationValue === value)?.location
            : "Select location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.id}
                value={framework.location}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.location ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.location}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
