import { SpacerBlock } from '@/layouts/types';

import { cn } from '@/lib/utils'; // Adjust the path based on your project structure

interface AssignSpacing {
  [key: string]: string;
}

export default function SpacerBlock({props} : {props: SpacerBlock}) {
  const assignSpacing: AssignSpacing = {
    small: 'py-10',
    medium: 'py-20',
    large: 'py-32',
  }

  return (
    <section className={cn('relative', assignSpacing[props.spacer])}></section>
  );
}

