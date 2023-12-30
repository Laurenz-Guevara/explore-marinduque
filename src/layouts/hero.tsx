interface Item {
  id: string;
  blockType: string;
  headingOne?: string;
  mainHeading?: string;
}

export default function Navbar({props} : {props : Item}) {
  return (
    <section className="splashpage relative h-screen grid place-items-center text-center">
      <div className="bg-black opacity-40 w-full h-full absolute top-0"></div>
      <div className="z-10">
        <h1 className="text-white"><span className="tracking-[1rem] font-light text-2xl uppercase">{props.headingOne}</span><br/><span className="text-9xl leading-[1.4] font-semibold">{props.mainHeading}</span></h1>
      </div>
    </section>
  );
}

