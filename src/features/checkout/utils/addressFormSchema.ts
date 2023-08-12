import * as Yup from "yup";
export const initialAdressForm: Omit<
  UserAddress,
  "_id" | "userId" | "createdAt" | "updatedAt" | "__v"
> = {
  country: "",
  city: "",
  default: true,
  contactPhone: "",
  postalCode: "",
  street: "",
  province: "",
  addressLabel: "Home",
  additionalLandmarks: "",
};

export const addressFormSchema = Yup.object({
  default: Yup.boolean(),
  country: Yup.string().min(3).max(15).required(),
  city: Yup.string().min(3).max(20).required(),
  contactPhone: Yup.string().min(7).max(13).required(),
  postalCode: Yup.string().min(3).max(5).required(),
  street: Yup.string().required(),
  province: Yup.string().min(3).max(10).required(),
  addressLabel: Yup.string().required(),
  additionalLandmarks: Yup.string().max(30),
});
