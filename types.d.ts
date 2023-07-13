type ApiResponse = {
  message: string;
  data: null;
  error: null;
};

/**
 *
 * Shoppingcart Types
 *
 */
interface CartResponse {
  message: string;
  data: Cart;
}
type Cart = {
  userCart: UserCart;
  cartTotal: number;
  discountedTotal: number;
};

interface GetCartByIdResponse extends ApiResponse {
  data: {
    cartItem: {
      productId: string;
      quantity: number;
      _id: string;
    };
  };
}
interface RemoveCartitemResponse extends ApiResponse {
  data: {
    userCart: { _id: string };
  };
}

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

/**
 *
 * End Shoppingcart Types
 *
 */

/**
 *
 * Products Types
 *
 */
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
  specifications: string;
  deliveryCost: "free" | number;
  __v: number;
};

type ProductsResponse = {
  data: {
    products: Array<Products>;
    pagination: {
      limit: string;
      remainingPages: number;
      length: number;
      actualProductsLength: number;
      currentPage: string;
    };
  };
  error: string | null;
  message: string;
};

interface ProductByIdResponse extends ApiResponse {
  data: {
    product: Products;
  };
}

type productQueriesParameter = {
  limit: number;
  page?: number;
  q?: string | undefined;
  parts?: "pagination" | "filter" | "pagination,filter";
};

interface TopRatedProductsResponse extends ApiResponse {
  data: {
    products: Array<Products>;
    pagination: { length: number; page: number };
  };
}

/**
 *
 * End Products Types
 *
 */

/**
 *
 * User Types
 *
 */

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

/**
 *
 * End User Types
 *
 */

/**
 *
 * Auth Types
 *
 */
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

type ChangeUserPassword = {
  currentPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
};
/**
 *
 * End Auth Types
 *
 */
/**
 *
 * start Categories Types
 *
 */

interface CategoryResponse extends ApiResponse {
  data: {
    categories: Categories[];
  };
}

type Categories = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

/**
 *
 * End Categories Types
 *
 */

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

interface IPaymentMethod {
  id: string;
  value: boolean;
  paymentData: Object;
}

type sortMethods = "-createdAt" | "price" | "-price" | "reviews" | "discount";
