export interface IApiCallState {
  isLoading: boolean;
  isSuccess: Boolean;
  isError: boolean;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  currency: string;
  images: Array<string>;
}

export interface ICreditCard {
  "card-number": string;
  "expire-date": {
    asDate: Date;
    asString: string;
  };
  cvv: string;
  isCurrent: boolean;
}
