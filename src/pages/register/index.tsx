import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { routes } from "@/constants/Routes";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import signupImg from "../../assets/img/signup.webp";
import loginImg from "../../assets/img/login.webp";
import Image from "next/image";
import ResetPassword from "./registerComponents/ResetPassword";

const Logo = dynamic(() => import("../../components/Logo"), {
  loading: () => <QuickLoadingModul />,
});
const Login = dynamic(() => import("./registerComponents/Login"), {
  loading: () => <QuickLoadingModul />,
});
const Signup = dynamic(() => import("./registerComponents/Signup"), {
  loading: () => <QuickLoadingModul />,
});

function Register() {
  const {
    push,
    pathname,
    query: { target },
  } = useRouter();
  const { login, register, signup, forgetPassword } = routes.register;
  const handleChangePage = (data: string) => {
    push({
      pathname: register,
      query: { target: data },
    });
  };

  return (
    <>
      <Head>
        <title>{`Shoperz - ${target || "login".toLocaleUpperCase()}`}</title>
      </Head>
      <main className="register-page">
        <article className="register-picture-wrapper">
          <figure className="relative flex w-full h-full rounded-xl shadow-sm overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-Grey-800 after:bg-opacity-30">
            <Image
              src={target?.includes(login) ? loginImg : signupImg}
              alt="register-img"
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <span className="reg-pic-text">
            <Logo />
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              vitae odio doloremque ipsum facilis nisi! Et quae autem libero
              porro.
            </p>
          </span>
        </article>
        <article className="register-form-wrapper">
          <header className="self-start lg:self-end">
            <Logo />
          </header>
          <h3 className="font-semibold uppercase my-8">welcome to shoperz</h3>
          <nav className="register-action-navbar">
            <button
              onClick={() => handleChangePage(signup)}
              className={
                target === signup
                  ? "register-navlink register-navlink-active"
                  : "register-navlink"
              }
            >
              signup
            </button>
            <button
              onClick={() => handleChangePage(login)}
              className={
                target === login
                  ? "register-navlink register-navlink-active"
                  : "register-navlink"
              }
            >
              login
            </button>
            <button
              onClick={() => handleChangePage(forgetPassword)}
              className={
                target === forgetPassword
                  ? "register-navlink register-navlink-active"
                  : "register-navlink"
              }
            >
              reset pass..
            </button>
          </nav>
          {target === login && <Login />}
          {target === signup && <Signup />}
          {target === forgetPassword && <ResetPassword />}
        </article>
      </main>
    </>
  );
}

export default Register;
