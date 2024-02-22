export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Brand {
  id: string;
  name: string;
  billboard: Billboard;
}
