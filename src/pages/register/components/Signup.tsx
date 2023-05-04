import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <form action="" className="lg:w-4/5 mb-14">
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
        />
      </div>
      <div className="flex items-stretch justify-end pt-8">
        <button
          type="submit"
          className="w-full lg:w-48 bg-sky-600 text-white uppercase px-4 py-3 rounded-full"
        >
          register
        </button>
      </div>
    </form>
  );
}

export default Signup;
