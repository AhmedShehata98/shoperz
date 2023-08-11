import React from "react";
import { useSignupUserMutation } from "@/services/shoperzApi.service";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import SubmitButton from "./SubmitButton";
import InputField from "@/components/InputField";
import FormInputWrapper from "@/components/FormInputWrapper";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikConfig,
} from "formik";
import { signupSchema } from "@/features/signup/utils/signupSchema";

function Signup() {
  const router = useRouter();
  const [fetchSignupUser, signupResponse] = useSignupUserMutation();
  const initialFormValues: Signup = {
    email: "",
    fullname: "",
    password: "",
    phone: "",
  };
  const handleSendSingupData = (
    values: Signup,
    formikHelpers: FormikHelpers<Signup>
  ) => {
    fetchSignupUser({
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      phone: values.phone,
    })
      .unwrap()
      .then((res) => {
        const domain = window.document.location.hostname;
        document.cookie = `${domain}=${res.data.token}`;
        toast.success("your account created success .");
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, actions) => handleSendSingupData(values, actions)}
      validationSchema={signupSchema}
    >
      <Form className="reg-form-wrapper">
        <p className="mb-3 lg:my-4 text-sm capitalize text-Grey-600">
          lets create new account in your favorate place and start your shopping
          and create new order .
        </p>
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-2 lg:gap-3 max-lg:mb-1 mb-2">
          <FormInputWrapper dir="col" extraClassName="basis-1/2">
            <label htmlFor="fullname" className="reg-form-label">
              full name
            </label>
            <Field
              type="text"
              id="fullname"
              placeholder="enter your fullname .."
              className="custom-input-field rounded-full py-2"
              name="fullname"
            />
            <small className="form-validaton-error-message">
              <ErrorMessage name="fullname" />
            </small>
          </FormInputWrapper>
          <FormInputWrapper dir="col" extraClassName="basis-1/2">
            <label htmlFor="phonenumber" className="reg-form-label">
              phone number
            </label>
            <Field
              type="tel"
              id="phonenumber"
              placeholder="phone number .."
              min={11}
              max={11}
              className="custom-input-field rounded-full py-2"
              name="phone"
            />
            <small className="form-validaton-error-message">
              <ErrorMessage name="phone" />
            </small>
          </FormInputWrapper>
        </div>
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
        <div className="flex items-stretch justify-end pt-3">
          <SubmitButton
            isLoading={signupResponse.isLoading}
            title={"sign-up"}
          />
        </div>
      </Form>
    </Formik>
  );
}

export default Signup;
