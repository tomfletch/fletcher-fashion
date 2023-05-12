type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPrice?: number;
};

export default Product;
