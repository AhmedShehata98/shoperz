type IPaymentMethod = {
  id: string;
  value: boolean;
  paymentData: {};
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

type AlertComponent = {
  show: boolean;
  alertType: "error" | "success" | "warning";
  message: string;
};
