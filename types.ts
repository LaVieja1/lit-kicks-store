export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Brand {
  id: string;
  name: string;
  billboard: Billboard;
}
