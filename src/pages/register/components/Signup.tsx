import React, { useState, useRef, useEffect } from "react";
import { useSignupUserMutation } from "@/services/shoperzApi.service";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import SubmitButton from "./SubmitButton";
import InputField from "@/components/InputField";
import FormInputWrapper from "@/components/FormInputWrapper";
import useFormData from "@/hooks/useFormData";

function Signup() {
  const router = useRouter();
  const { formData, handleInputFormData } = useFormData({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

  let timeoutRef = useRef(0);
  const [fetchSignupUser, signupResponse] = useSignupUserMutation();
  useEffect(
    function () {
      if (!signupResponse.isLoading) {
        //
        if (signupResponse.isError) {
          toast.error(signupResponse.error?.errDetails?.message, {
            position: "bottom-center",
            className: "w-max",
          });
        }
        if (signupResponse.isSuccess) {
          toast.success(
            "Congratulations, the account was successfully created",
            { position: "bottom-center", className: "w-max" }
          );
        }
        //
      }
    },
    [signupResponse]
  );
  const handleSendSingupData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    fetchSignupUser({
      fullname: data.get("fullname") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      phone: data.get("phone") as string,
    })
      .unwrap()
      .then((res) => {
        const domain = window.document.location.hostname;
        document.cookie = `${domain}=${res.data.token}`;
      })
      .then(() => {
        timeoutRef.current = +setTimeout(() => {
          router.push("/");
        }, 6000);
      });
  };

  return (
    <form action="" className="lg:w-4/5 mb-14" onSubmit={handleSendSingupData}>
      <p className="mb-3 lg:my-8 pb-3 lg:pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam.
      </p>
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-2 lg:gap-5 mb-4">
        <FormInputWrapper dir="col" extraClassName="basis-1/2">
          <label
            htmlFor="fullname"
            className="capitalize font-medium ms-2 text-Grey-900"
          >
            full name
          </label>
          <InputField
            type="text"
            id="fullname"
            placeholder="enter your fullname .."
            className="input-field"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputFormData}
          />
        </FormInputWrapper>
        <FormInputWrapper dir="col" extraClassName="basis-1/2">
          <label
            htmlFor="phonenumber"
            className="capitalize font-medium ms-2 text-Grey-900"
          >
            phone number
          </label>
          <InputField
            type="tel"
            id="phonenumber"
            placeholder="phone number .."
            min={11}
            max={11}
            className="input-field"
            name="phone"
            value={formData.phone}
            onChange={handleInputFormData}
          />
        </FormInputWrapper>
      </div>
      <FormInputWrapper dir="col">
        <label
          htmlFor="email"
          className="capitalize font-medium ms-2 text-Grey-900"
        >
          email
        </label>
        <InputField
          type="text"
          id="email"
          placeholder="enter your email .."
          className="input-field"
          name="email"
          value={formData.email}
          onChange={handleInputFormData}
        />
      </FormInputWrapper>
      <FormInputWrapper
        dir="col"
        className="flex flex-col items-stretch justify-start gap-2 mb-5"
      >
        <label
          htmlFor="password"
          className="capitalize font-medium ms-2 text-Grey-900"
        >
          password
        </label>
        <InputField
          type="password"
          id="password"
          placeholder="enter your password .."
          className="input-field"
          name="password"
          value={formData.password}
          onChange={handleInputFormData}
        />
      </FormInputWrapper>
      <div className="flex items-stretch justify-end pt-3">
        <SubmitButton isLoading={signupResponse.isLoading} title={"sign-up"} />
      </div>
    </form>
  );
}

export default Signup;
