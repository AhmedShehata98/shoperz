import FormInputWrapper from "@/components/FormInputWrapper";
import InputField from "@/components/InputField";
import SubmitButton from "./SubmitButton";
import React from "react";

function ResetPassword() {
  return (
    <form
      action={""}
      className="w-9/12 max-lg:w-full flex flex-col items-stretch justify-between gap-3 px-4"
    >
      <p className="my-5 lg:my-4 pb-2 lg:pb-3 capitalize text-sm text-Grey-700">
        if the email is already registerd you will receive an email address with
        reset password .
      </p>
      <FormInputWrapper dir="col">
        <label htmlFor="email" className="reg-form-label">
          email address
        </label>
        <InputField
          type="email"
          name="email"
          id="email"
          placeholder="enter your registerd email .."
          extraClassName="rounded-full"
        />
      </FormInputWrapper>
      <FormInputWrapper dir="col">
        <SubmitButton
          isLoading={false}
          title="reset"
          extraClassName="w-1/3 self-end"
        />
      </FormInputWrapper>
    </form>
  );
}

export default ResetPassword;
