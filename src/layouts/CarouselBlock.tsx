import { CarouselBlock, CarouselField } from '@/layouts/types';

import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Heading({props} : {props : CarouselBlock}) {
  const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
  return (
    <section className="w-full container">
      <div className="">
        <Carousel opts={OPTIONS} className="w-full">
          <CarouselContent className="-ml-1">
          {props.CarouselField.map((item: CarouselField, idx: number) => {
            return (
              <CarouselItem className="relative md:basis-1/2 lg:basis-1/4 first:!pl-1" key={idx}>
                <Image className="rounded-xl object-cover h-full" src={process.env.NEXT_PUBLIC_API_URL + item.media.url} alt={item.media.alt} width={item.media.width} height={item.media.height} />
                <div className="absolute bottom-0 w-full p-5 [&>p]:text-white">
                  <p className="text-3xl font-semibold">{item.title}</p>
                  <p className="text-lg">{item.secondary}</p>
                </div>
              </CarouselItem> 
            );
          })}


            {/* {Array.from({ length: 10 }).map((_, index) => ( */}
            {/*   <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4"> */}
            {/*     <div className="p-1"> */}
            {/*       <div className="bg-red-400"> */}
            {/*         <div className="flex aspect-square items-center justify-center p-6"> */}
            {/*           <span className="text-2xl font-semibold">{index + 1}</span> */}
            {/*         </div> */}
            {/*       </div> */}
            {/*     </div> */}
            {/*   </CarouselItem> */}
            {/* ))} */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

