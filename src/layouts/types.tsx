export interface Item {
  id: string;
  blockType: string;
}

export interface Heading extends Item{
  headingOne: string;
  headingTwo: string;
}

export interface Hero extends Item {
  headingOne: string;
  mainHeading: string;
}

export interface ImageListBlock extends Item {
  position: string;
  media: Media;
  headingOne: string;
  headingTwo: string;
  headingThree: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
}

 interface Media {
  id: string; 
  alt: string;
  filename: string;
  width: number;
  height: number;
  url: string;
}

export interface Response {
  docs: Array<Docs>;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean | null;
  nextPage: boolean | null;
}

export interface Docs {
  id: number;
  title: string;
  layout: Array<Item>;
  slug: string;
}

