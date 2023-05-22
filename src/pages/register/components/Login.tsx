import InputField from "@/components/InputField";
import Logo from "@/components/Logo";
import useFormData from "@/hooks/useFormData";
import { useLoginUserMutation } from "@/services/shoperzApi.service";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function Login() {
  const { push } = useRouter();
  const { formData, handleInputFormData } = useFormData({
    email: "",
    password: "",
    "remeber-me": false,
  });
  const [fetchLoginUser, loginResponse] = useLoginUserMutation();
  function handleStartLogin(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const { email, password } = formData;
    // const data = new FormData(ev.currentTarget);

    /////////
    fetchLoginUser({ email, password })
      .unwrap()
      .then((response) => {
        const domain = document.location.hostname;
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (formData["remeber-me"]) {
          document.cookie = `${domain}=${response.data.token}; expires=${tomorrow}`;
        } else {
          document.cookie = `${domain}=${response.data.token};`;
        }
      })
      .then(() => {
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
      <p className="my-5 lg:my-8 pb-2 lg:pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        amet! Ab nobis consequatur corporis.
      </p>
      <div className="flex flex-col items-stretch justify-start gap-2 mb-5">
        <label htmlFor="email" className="capitalize font-medium ms-2">
          email
        </label>
        <InputField
          type="text"
          id="email"
          name="email"
          placeholder="enter your email .."
          value={formData.email}
          extraClassName={"py-2 rounded-full"}
          onChange={handleInputFormData}
        />
      </div>
      <div className="flex flex-col items-stretch justify-start gap-2 mb-5">
        <label htmlFor="password" className="capitalize font-medium ms-2">
          password
        </label>
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="enter your password .."
          value={formData.password}
          onChange={handleInputFormData}
          extraClassName={"py-2 rounded-full"}
        />
      </div>
      <div className="flex items-stretch justify-between gap-2">
        <span>
          <input
            type="checkbox"
            name="remeber-me"
            id="remeber-me"
            checked={formData["remeber-me"]}
            onChange={handleInputFormData}
            className="w-4 accent-sky-700 mx-2"
          />
          <label
            htmlFor="remeber-me"
            className="font-mono capitalize select-none"
          >
            remeber me
          </label>
        </span>
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
        <button
          type="submit"
          className="w-full lg:w-48 bg-sky-600 text-white uppercase px-4 py-3 rounded-full"
        >
          {loginResponse.isLoading ? (
            <label
              htmlFor=""
              className="flex items-center justify-center gap-3"
            >
              <span className="spinner-loading w-7 h-7 border-black"></span>
              <small>wait a moment ..</small>
            </label>
          ) : (
            "login"
          )}
        </button>
      </div>
    </form>
  );
}

export default Login;
