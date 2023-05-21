import React, { useState, useRef, useEffect } from "react";
import { useSignupUserMutation } from "@/services/shoperzApi.service";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState<Signup>({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });
  let timeoutRef = useRef(0);

  const [signupUser, signupResponse] = useSignupUserMutation();
  const handleGetValue = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  useEffect(
    function () {
      if (!signupResponse.isLoading) {
        //
        if (signupResponse.isError) {
          toast.error(signupResponse.error?.errDetails.message, {
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

  const handleSendSingupData = (e: React.FormEvent) => {
    e.preventDefault();

    signupUser(formData)
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
        <span className="basis-1/2 mb-2 lg:mb-0">
          <label htmlFor="fullname" className="capitalize font-medium ms-2">
            full name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="enter your fullname .."
            className="input-field"
            name="fullname"
            value={formData.fullname}
            onChange={handleGetValue}
          />
        </span>
        <span className="basis-1/2 ">
          <label htmlFor="phonenumber" className="capitalize font-medium ms-2">
            phone number
          </label>
          <input
            type="tel"
            id="phonenumber"
            placeholder="phone number .."
            min={11}
            max={11}
            className="input-field"
            name="phone"
            value={formData.phone}
            onChange={handleGetValue}
          />
        </span>
      </div>
      <div className="flex flex-col items-stretch justify-start gap-2 mb-4">
        <label htmlFor="email" className="capitalize font-medium ms-2">
          email
        </label>
        <input
          type="text"
          id="email"
          placeholder="enter your email .."
          className="input-field"
          name="email"
          value={formData.email}
          onChange={handleGetValue}
        />
      </div>
      <div className="flex flex-col items-stretch justify-start gap-2 mb-5">
        <label htmlFor="password" className="capitalize font-medium ms-2">
          password
        </label>
        <input
          type="password"
          id="password"
          placeholder="enter your password .."
          className="input-field"
          name="password"
          value={formData.password}
          onChange={handleGetValue}
        />
      </div>
      <div className="flex items-stretch justify-end pt-3">
        <button
          type="submit"
          className="w-full lg:w-48 bg-sky-600 text-white uppercase px-4 py-2 rounded-full"
        >
          {signupResponse.isLoading ? (
            <label
              htmlFor=""
              className="flex items-center justify-center gap-3"
            >
              <span className="spinner-loading w-7 h-7 border-black"></span>
              <small>wait a moment ..</small>
            </label>
          ) : (
            "register"
          )}
        </button>
      </div>
    </form>
  );
}

export default Signup;
