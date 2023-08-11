import InputField from "@/components/InputField";
import { useLoginUserMutation } from "@/services/shoperzApi.service";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import SubmitButton from "./SubmitButton";
import FormInputWrapper from "@/components/FormInputWrapper";
import { useDispatch } from "react-redux";
import { routes } from "@/constants/Routes";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  loginInintialValues,
  loginValidationSchema,
} from "@/features/login/utils/loginSchema";

function Login() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { forgetPassword } = routes.register;
  const [fetchLoginUser, loginResponse] = useLoginUserMutation();
  function handleStartLogin(
    values: Login,
    formikHelpers: FormikHelpers<Login>
  ) {
    fetchLoginUser({
      email: values.email,
      password: values.password,
    })
      .unwrap()
      .then((res) => {
        toast.success("Logged in successfuly .");
      })
      .then(() => {
        push("/");
      })
      .catch((err) => {
        toast.error(err.data.message || err.data.error);
      });
  }

  return (
    <Formik
      initialValues={loginInintialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, actions) => handleStartLogin(values, actions)}
    >
      <Form className="reg-form-wrapper">
        <p className="mb-3 lg:my-4 text-sm capitalize text-Grey-600">
          login with your account and start your shopping tour in your favorate
          place .
        </p>
        <FormInputWrapper dir="col">
          <label htmlFor="email" className="reg-form-label">
            email
          </label>
          <Field
            type="text"
            id="email"
            placeholder="enter your email .."
            name="email"
            className="custom-input-field rounded-full py-2"
          />
          <small className="form-validaton-error-message">
            <ErrorMessage name="email" />
          </small>
        </FormInputWrapper>
        <FormInputWrapper
          dir="col"
          className="flex flex-col items-stretch justify-start gap-2 mb-5"
        >
          <label htmlFor="password" className="reg-form-label">
            password
          </label>
          <Field
            type="password"
            id="password"
            placeholder="enter your password .."
            className="custom-input-field rounded-full py-2"
            name="password"
          />
          <small className="form-validaton-error-message">
            <ErrorMessage name="password" />
          </small>
        </FormInputWrapper>
        <div className="flex items-stretch justify-between gap-2">
          <FormInputWrapper dir="row">
            <input
              type="checkbox"
              name="remeber-me"
              id="remeber-me"
              className="w-4 accent-sky-700 mx-2"
            />
            <label
              htmlFor="remeber-me"
              className="font-mono capitalize select-none"
            >
              remeber me
            </label>
          </FormInputWrapper>
          <Link
            href={{
              pathname: "reset-password",
              query: { target: "reset-password" },
            }}
            className="underline text-sky-800"
          >
            forget password ?
          </Link>
        </div>
        <div className="flex items-stretch justify-end pt-6">
          <SubmitButton isLoading={loginResponse.isLoading} title="login" />
        </div>
      </Form>
    </Formik>
  );
}

export default Login;
