import * as Yup from "yup";

export const signupSchema = Yup.object({
  fullname: Yup.string()
    .min(2)
    .max(20)
    .required("must provide your fulll name its required !! ."),
  email: Yup.string()
    .email("please provide valied email format .")
    .required("must provide email address its requried !")
    .trim(),
  phone: Yup.string()
    .min(10)
    .max(13)
    .required("must provide phone number its requried !"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .required("must provide password its requried !")
    .matches(/[0-9]/, "your password must have at least one digit ")
    .matches(
      /[a-z]/,
      "your password must have at least one lowercase character "
    )
    .matches(
      /[A-Z]/,
      "your password must have at least one uppercase character "
    )
    .matches(
      /^[a-zA-z0-9]/,
      "your password must have at least one of (! @ # $ % & *) character "
    ),
});
