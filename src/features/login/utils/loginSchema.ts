import * as Yup from "yup";

export const loginInintialValues: Login = {
  email: "",
  password: "",
};
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("lease provide a valide email format")
    .required("must provide email address ."),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .required("must provide password its requried !"),
});
