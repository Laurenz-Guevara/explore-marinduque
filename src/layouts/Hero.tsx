import { Hero } from '@/layouts/types';

export default function Navbar({props} : {props : Hero}) {
  return (
    <section className="splashpage relative h-screen grid place-items-center text-center">
      <div className="bg-black opacity-20 w-full h-full absolute top-0"></div>
      <div className="z-10">
        <h1 className="text-white"><span className="tracking-[1rem] font-medium text-2xl uppercase">{props.headingOne}</span><br/><span className="text-[12rem] leading-[1.3] font-bold">{props.mainHeading}</span></h1>
      </div>
    </section>
  );
}

