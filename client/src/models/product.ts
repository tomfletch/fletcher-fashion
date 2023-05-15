export type Product = {
  _id: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  discountPrice?: number;
  image: string;
};
