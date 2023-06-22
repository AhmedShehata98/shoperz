import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { routes } from "@/constants/Routes";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import signupImg from "../../assets/img/signup.webp";
import loginImg from "../../assets/img/login.webp";
import Image from "next/image";

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
  const { login, register, signup } = routes.register;
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
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="hidden relative lg:flex w-1/2 h-screen p-5">
          <figure className="relative flex w-full h-full rounded-xl shadow-sm overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-Grey-800 after:bg-opacity-30">
            <Image
              src={target?.includes(login) ? loginImg : signupImg}
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
          <header className="self-start lg:self-end">
            <Logo />
          </header>
          <h3 className="font-semibold uppercase my-8">welcome to shoperz</h3>
          <nav className="w-full lg:w-max flex items-center justify-between bg-sky-300 gap-2 rounded-full p-2 mb-3">
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
          </nav>
          {target === login && <Login />}
          {target === signup && <Signup />}
        </div>
      </main>
    </>
  );
}

export default Register;
