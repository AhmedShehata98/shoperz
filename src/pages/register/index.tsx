import React, { useState } from "react";
import Logo from "../../components/Logo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import registerImg from "../../assets/img/register.jpg";
import Head from "next/head";

function Register() {
  const [currentOperation, setCurrentOperation] = useState<
    "login" | "signup" | "reset"
  >("login");
  return (
    <>
      <Head>
        <title>{`Shoperz - ${currentOperation.toLocaleUpperCase()}`}</title>
      </Head>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="hidden relative lg:flex w-1/2 h-screen p-5">
          <figure className="relative flex w-full h-full rounded-xl shadow-sm overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-Grey-800 after:bg-opacity-30">
            <img
              src={registerImg.src}
              alt="register-img"
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <span className="flex flex-col w-3/4 absolute bottom-[15%] shadow-md z-10 left-1/2 -translate-x-1/2 bg-gray-100 p-4 rounded-lg opacity-90 backdrop-blur-sm">
            <Logo />
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              vitae odio doloremque ipsum facilis nisi! Et quae autem libero
              porro.
            </p>
          </span>
        </div>

        <div className="lg:w-1/2 h-screen flex items-center justify-start lg:center gap-3 flex-col py-5 px-5 lg:px-12">
          <header className="self-start lg:self-end mb-auto">
            <Logo />
          </header>
          <h3 className="font-semibold capitalize mb-5">welcome to shoperz</h3>
          <nav className="w-full lg:w-max flex items-center justify-between bg-sky-300 gap-2 rounded-full p-2 mb-3">
            <button
              onClick={() => setCurrentOperation("signup")}
              className={
                currentOperation === "signup"
                  ? "register-navlink register-navlink-active"
                  : "register-navlink"
              }
            >
              signup
            </button>
            <button
              onClick={() => setCurrentOperation("login")}
              className={
                currentOperation === "login"
                  ? "register-navlink register-navlink-active"
                  : "register-navlink"
              }
              // text-white bg-sky-600  shadow-md hover:bg-sky-600 hover:md
            >
              login
            </button>
          </nav>
          {currentOperation === "login" && <Login />}
          {currentOperation === "signup" && <Signup />}
        </div>
      </main>
    </>
  );
}

export default Register;
