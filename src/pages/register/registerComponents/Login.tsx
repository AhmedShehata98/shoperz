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

function Login() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { forgetPassword } = routes.register;
  const [fetchLoginUser, loginResponse] = useLoginUserMutation();
  function handleStartLogin(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    fetchLoginUser({
      email: data.get("email") as string,
      password: data.get("password") as string,
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
    <form action="" className="reg-form-wrapper" onSubmit={handleStartLogin}>
      <p className="mb-3 lg:my-4 text-sm capitalize text-Grey-600">
        login with your account and start your shopping tour in your favorate
        place .
      </p>
      <FormInputWrapper dir="col">
        <label htmlFor="email" className="reg-form-label">
          email
        </label>
        <InputField
          type="text"
          id="email"
          name="email"
          placeholder="enter your email .."
          extraClassName={"py-2 rounded-full"}
        />
      </FormInputWrapper>
      <FormInputWrapper dir="col">
        <label htmlFor="password" className="reg-form-label">
          password
        </label>
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="enter your password .."
          extraClassName={"py-2 rounded-full"}
        />
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
    </form>
  );
}

export default Login;
