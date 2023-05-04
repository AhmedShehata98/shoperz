import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <form action="" className="lg:w-4/5 mb-14">
      <p className="my-5 lg:my-8 pb-2 lg:pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        amet! Ab nobis consequatur corporis.
      </p>
      <div className="flex flex-col items-stretch justify-start gap-2 mb-5">
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
      <div className="flex items-stretch justify-between gap-2">
        <span>
          <input
            type="checkbox"
            name="remeber-me"
            id="remeber-me"
            className="w-4 accent-sky-700 mx-2"
          />
          <label htmlFor="remeber-me" className="font-mono capitalize">
            remeber me
          </label>
        </span>
        <Link href={"reset-password"} className="underline text-sky-800">
          forget password ?
        </Link>
      </div>
      <div className="flex items-stretch justify-end pt-14">
        <button
          type="submit"
          className="w-full lg:w-48 bg-sky-600 text-white uppercase px-4 py-3 rounded-full"
        >
          login
        </button>
      </div>
    </form>
  );
}

export default Login;
