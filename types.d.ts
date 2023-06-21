type ApiResponse = {
  message: string;
  data: null;
  error: null;
};
interface CartResponse {
  message: string;
  data: Cart;
}
type Cart = {
  userCart: UserCart;
  cartTotal: number;
  discountedTotal: number;
};

interface AddToCartResponse extends ApiResponse {
  data: {
    cart: Array<{ _id: string }>;
    cartTotal: number;
    discountedTotal: number;
  };
}

type UserCart = {
  _id: string;
  userId: string;
  items: Array<CartProducts>;
  createdAt: string;
  updatedAt: string;
  __v: string;
};

type CartProducts = {
  productId: Products;
  quantity: number;
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
  category_id: {
    _id: string;
    name: string;
  };
  sku: string;
  brand: string;
  colors: Array<string>;
  stock: number;
  discount: number;
  rating: number;
  isInCart: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ProductsResponse = {
  data: {
    products: Array<Products>;
    paginition: {
      limit: number;
      currentPage: number;
      remainingPages: number;
      length: number;
      actualProductsLength: number;
    };
  };
  error: string | null;
  message: string;
};

type productQueriesParameter = {
  limit: number;
  page?: number;
  sortQueries?: Object;
};
interface TopRatedProductsResponse extends ApiResponse {
  data: {
    products: Array<Products>;
    pagination: { length: number; page: number };
  };
}

interface SearchBox extends Omit<ProductsResponse, "data"> {
  data: {
    products: Array<
      Omit<
        Products,
        | "description"
        | "price"
        | "images"
        | "category_id"
        | "sku"
        | "brand"
        | "colors"
        | "stock"
        | "discount"
        | "rating"
        | "createdAt"
        | "updatedAt"
        | "__v"
      >
    >;
    paginition: {
      length: number;
      page;
    };
  };
}

type sortMethods = "-createdAt" | "price" | "-price" | "reviews" | "discount";
type UserData = {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
};
interface ShippingAddressResponse extends ApiResponse {
  data: {
    userAddresses: Array<UserAddress>;
  };
}

type UserAddress = {
  _id: string;
  userId: string;
  country: string;
  province: string;
  city: string;
  street: string;
  additionalLandmarks: string;
  postalCode: string;
  contactPhone: string;
  default: boolean;
  addressLabel: "Home" | "Work";
  createdAt: string;
  updatedAt: string;
  __v: 0;
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

interface LoginResponse extends ApiResponse {
  data: { token: string };
}

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
