import { HeadingBlock } from '@/layouts/types';

export default function HeadingBlock({props} : {props : HeadingBlock}) {
  return (
    <section className="w-full py-20 flex justify-center text-center">
      <div className="space-y-4">
        <h2 className=""><span className="tracking-[0.5rem] font-semibold text-base uppercase text-secondary">{props.headingOne}</span><br/><span className="text-5xl font-bold leading-loose">{props.headingTwo}</span></h2>
      </div>
    </section>
  );
}

