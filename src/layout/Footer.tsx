import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRouter } from "next/router";
// import FooterCategory from "./components/FooterCategory";
import dynamic from "next/dynamic";

const FooterContactColumn = dynamic(
  () => import("@/features/footer/components/FooterContactColumn"),
  { loading: () => <div>loading FooterContactColumn ...</div> }
);
const FooterButtomBar = dynamic(
  () => import("@/features/footer/components/FooterButtomBar"),
  { loading: () => <div>loading FooterButtomBar ...</div> }
);
const FooterCategoriesColumn = dynamic(
  () => import("@/features/footer/components/FooterCategoriesColumn"),
  { loading: () => <div>loading FooterCategoriesColumn ...</div> }
);
const FooterUsefulLinksColumn = dynamic(
  () => import("@/features/footer/components/FooterUsefulLinksColumn"),
  { loading: () => <div>loading FooterUsefulLinksColumn...</div> }
);
const FooterCustomerColumn = dynamic(
  () => import("@/features/footer/components/FooterCustomerColumn"),
  { loading: () => <div>loading FooterCustomerColumn...</div> }
);

function Footer() {
  const footerRef = React.useRef<HTMLElement | null>(null);
  const { pathname } = useRouter();
  React.useLayoutEffect(() => {
    if (pathname === "/register") {
      footerRef.current?.classList.add("hidden");
    } else {
      footerRef.current?.classList.remove("hidden");
    }
  }, [pathname]);

  return (
    <footer ref={footerRef} className="w-full mt-auto">
      <section className="bg-Grey-800 py-6 px-2">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4 flex-wrap">
          <h5 className="capitalize text-white ">
            <b>subscribe to out newsletter</b> - get a{" "}
            <b>
              <u>$20 copon</u>
            </b>{" "}
            for your first order !
          </h5>
          <form
            action=""
            className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center rounded-full overflow-hidden"
          >
            <input
              type="text"
              placeholder="enter your email address .."
              className="px-4 py-2 w-full focus:outline-none focus:bg-Grey-100"
            />
            <button className="w-16 flex items-center justify-center bg-Primary-600 py-2 text-white text-2xl hover:bg-Primary-500">
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </section>
      <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-5 px-2 pt-12">
        <FooterContactColumn />
        <FooterCategoriesColumn />
        <FooterUsefulLinksColumn />
        <FooterCustomerColumn />
      </section>
      <FooterButtomBar />
    </footer>
  );
}

export default Footer;
