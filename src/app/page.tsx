
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="splashpage h-screen grid place-items-center text-center">
        <div className="bg-black opacity-40 w-full h-full absolute top-0"></div>
        <div className="z-10">
        <h1 className="text-xl text-white"><span className="tracking-[1rem] font-light text-2xl">EXPLORE</span><br/><span className="text-9xl leading-[1.4] font-semibold">Marinduque</span></h1>
        </div>
      </section>
      <section className="h-screen bg-green-200">
      </section>
    </main>
  );
}

