export interface ICart {
  cart: Array<{
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
    totalPrice: number;
    currency: string;
    quantity: number;
    images: Array<string>;
  }>;
}
export interface IApiCallState {
  isLoading: boolean;
  isFetched: Boolean;
  isError: boolean;
}
