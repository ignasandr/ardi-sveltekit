export interface News {
  id?: string;
  heading?: string;
  body?: {
    [k: string]: unknown;
  }[];
  image: Image;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id?: string;
  alt: string;
  url: string;
}

export interface Contact {
  id: string;
  requisites: {
    [k: string]: unknown;
  }[];
  phone: string;
  mphone: string;
  email: string;
  background: Image;
}

export interface Catalog {
  id: string;
  title: string;
  items: {
    image: Image;
    id: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface RichText {
  [k: string]: unknown;
}

export interface RichText {
  content?: {
    [k: string]: unknown;
  }[];
  id?: string;
  blockName?: string;
  blockType: "richText";
}
