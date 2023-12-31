import { ImageListBlock } from '@/layouts/types';

import Image from 'next/image'

export default function Navbar({props} : {props: ImageListBlock}) {
  return (
    <section className="w-full container">
      <div className="grid grid-cols-12">
        <div className={`col-span-7 ${props.position === 'left' ? 'pr-10' : 'pl-10 order-1'}`}>
          <Image className="rounded-xl object-cover h-full" src={process.env.NEXT_PUBLIC_API_URL + props.media.url} alt={props.media.alt} width={props.media.width} height={props.media.height} />
        </div>
        <div className="col-span-5 flex flex-wrap">
          {/*TODO Refactor this so we can map through*/}
          <div className="flex space-x-8 pb-20">
            <div>
              <p className="text-2xl text-tertiary">01</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-3xl">{props.headingOne}</h3>
              <p className="text-quaternary">{props.paragraphOne}</p>
            </div>
          </div>
          <div className="flex space-x-8 pb-20">
            <div>
              <p className="text-2xl text-tertiary">02</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-3xl">{props.headingTwo}</h3>
              <p className="text-quaternary">{props.paragraphTwo}</p>
            </div>
          </div>
          <div className="flex space-x-8">
            <div>
              <p className="text-2xl text-tertiary">03</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-3xl">{props.headingThree}</h3>
              <p className="text-quaternary">{props.paragraphThree}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

