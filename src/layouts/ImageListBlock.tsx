import { ImageListBlock } from '@/layouts/types';

import Image from 'next/image'

export default function Navbar({props} : {props: ImageListBlock}) {
  return (
    <section className="w-full flex justify-center text-center bg-red-500">
      <Image className="w-full" src={process.env.NEXT_PUBLIC_API_URL + props.media.url} alt={props.media.alt} width={props.media.width} height={props.media.height} />
    </section>
  );
}

