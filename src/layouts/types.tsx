export interface Item {
  id: string;
  blockType: string;
}

export interface HeadingBlock extends Item{
  headingOne: string;
  headingTwo: string;
}

export interface HeroBlock extends Item {
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

export interface CarouselBlock extends Item{
  autoplay: string;
  CarouselField: CarouselField[];
}

export interface CarouselField {
  media: Media;
  title: string;
  secondary: string;
  id: number;
  }

export interface Response {
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

export interface LayoutBlocks extends Response {
  docs: Array<Blocks>
}

export interface AccommodationBlock extends Response {
  docs: Array<Accommodation>
}

export interface Blocks {
  id: number;
  title: string;
  layout: Array<Item>;
  slug: string;
}

export interface ThreeCardBlock extends Item {
  cardType: "accomodation"
}

export interface Accommodation {
  id: string;
  location: string;
  name: string;
  rating: number;
  price: number;
  updatedAt: string;
  media: Media;
}

export interface ReviewBlock extends Item {
  backgroundImage: Media;
  reviewItems: Array<ReviewItem>
}

interface ReviewItem {
  picture: Media;
  name: string,
  review: string,
  id: string
}

export interface SpacerBlock extends Item {
  spacer: string;
}

