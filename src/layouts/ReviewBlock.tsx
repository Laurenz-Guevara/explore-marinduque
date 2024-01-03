import { ReviewBlock } from '@/layouts/types';

import Image from 'next/image'

export default function ReviewBlock({props} : {props: ReviewBlock}) {
  return (
    <section className="w-full container">
      <div className="relative">
        <Image className="rounded-xl object-cover h-full" src={props.backgroundImage.url} alt={props.backgroundImage.alt} width={props.backgroundImage.width} height={props.backgroundImage.height} />
        <div className="grid grid-cols-3 gap-x-10 items-center absolute top-0 h-full w-full p-20">
          {props.reviewItems.map((item) => {
            return (
              <div className="">
                <div key={item.id} className="flex flex-wrap">
                  <div className="bg-white rounded-xl w-full h-60 px-10 py-5 grid grid-rows-3">
                    <p className="row-span-2">{item.review}</p>
                    <div className="py-5 flex">
                      <Image className="rounded-full object-cover h-10 w-10 mr-3" src={item.picture.url} alt={item.picture.alt} width={item.picture.width} height={item.picture.height} />
                      <p className="font-bold">{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

