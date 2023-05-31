interface ICart {
  carts: Array<CartItems>;
}

type CartItems = {
  id: number;
  products: Array<CartProducts>;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

type CartProducts = {
  id: number;
  title: "Spring and summershoes";
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
};

type IPaymentMethod = {
  id: string;
  value: boolean;
  paymentData: {};
};

type Products = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: Array<string>;
  thumbnail: string;
  category_id: string;
  sku: string;
  brand: string;
  colors: Array<string>;
  stock: number;
  discount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ProductsResponse = {
  data: {
    count: number;
    nextLastId: string;
    products: Array<Products>;
  };
  error: string | null;
  message: string;
};

type UserData = {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
};
type ShippingAddress = {
  id: string;
  isCurrent?: boolean;
  addressType: "house address" | "work address";
  firstName: string;
  lastName: string;
  "country-or-regio": string;
  "more-of-location": string;
  city: string;
  province: string;
  postcode: string;
  "phone-number": string;
  email: string;
};

type Signup = {
  fullname: string;
  phone: string;
  email: string;
  password: string;
};

type SignupError = {
  data: null | {};
  error: Array<{
    field: string;
    error: Array<{
      message: string;
      context: { key: string; label: string; limit: number; value: string };
      path: Array<string>;
      type: string;
    }>;
  }>;
  message: string;
};

type SignupSuccess = {
  message: string;
  data: { token: string };
  error: null | string;
};

type Login = {
  email: string;
  password: string;
};

type VertifyPayload = {
  token: string;
  uid: string;
};

type ChangeUserPassword = {
  currentPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
};

type AlertComponent = {
  show: boolean;
  alertType: "error" | "success" | "warning";
  message: string;
};
