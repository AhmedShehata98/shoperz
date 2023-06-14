import InputField from "@/components/InputField";
import useFormData from "@/hooks/useFormData";
import { useLoginUserMutation } from "@/services/shoperzApi.service";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import SubmitButton from "./SubmitButton";
import FormInputWrapper from "@/components/FormInputWrapper";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/slices/app.slice";

function Login() {
  const { push } = useRouter();
  const dispatch = useDispatch();

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
        dispatch(setToken({ token: res.data.token }));
        setTimeout(() => {
          push("/");
        }, 5050);
      });
  }

  useEffect(() => {
    if (loginResponse.isLoading === false) {
      if (loginResponse.isError) {
        toast.error("Oops , e-mail address or password in incorrect", {
          position: "bottom-center",
          className: "w-max",
        });
      }
      if (loginResponse.isSuccess) {
        toast.success(
          "You have been successfully logged in and will now be redirected to the home page",
          { position: "bottom-center", className: "w-max" }
        );
      }
    }
  }, [loginResponse]);
  return (
    <form action="" className="lg:w-4/5 mb-14" onSubmit={handleStartLogin}>
      <p className="my-5 lg:my-8 pb-2 lg:pb-3 capitalize">
        login with your account and start your shopping tour in your favorate
        place .
      </p>
      <FormInputWrapper dir="col">
        <label htmlFor="email" className="capitalize font-medium ms-2">
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
        <label htmlFor="password" className="capitalize font-medium ms-2">
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
      <div className="flex items-stretch justify-end pt-14">
        <SubmitButton isLoading={loginResponse.isLoading} title="login" />
      </div>
    </form>
  );
}

export default Login;
