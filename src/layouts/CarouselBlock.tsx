import { CarouselBlock, CarouselField } from '@/layouts/types';

import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselBlock({props} : {props : CarouselBlock}) {
  const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
  return (
    <section className="w-full container">
      <div className="">
        <Carousel opts={OPTIONS} className="w-full">
          <CarouselContent className="-ml-1">
            {props.CarouselField.map((item: CarouselField, idx: number) => {
              return (
                <CarouselItem className="relative md:basis-1/2 lg:basis-1/4 first:!pl-1" key={idx}>
                  <Image className="rounded-xl object-cover h-full" src={item.media.url} alt={item.media.alt} width={item.media.width} height={item.media.height} />
                  <div className="absolute bottom-0 w-full p-5 [&>p]:text-white">
                    <p className="text-3xl font-semibold">{item.title}</p>
                    <p className="text-lg">{item.secondary}</p>
                  </div>
                </CarouselItem> 
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

