export interface ICart extends IProduct {
  quantity: number;
}
export interface IApiCallState {
  isLoading: boolean;
  isFetched: Boolean;
  isError: boolean;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  currency: string;
  images: Array<string>;
}
