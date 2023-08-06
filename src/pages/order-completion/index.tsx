import React from "react";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import Head from "next/head";
import PaymentStatusbar from "@/components/PaymentStatusbar";
import { useRouter } from "next/router";
import OrderState from "@/features/order-completion/components/OrderState";
import OrderAddress from "@/features/order-completion/components/OrderAddress";
import {
  useGetOrderByIdQuery,
  useGetOrdersQuery,
} from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import OrderInvoice from "@/features/order-completion/components/OrderInvoice";
import PaymentInformations from "@/features/order-completion/components/PaymentInformations";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";

const ProductCard = dynamic(
  () => import("../../components/orderComponents/ProductCard"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

interface OrderProps {}

const Order = () => {
  const { pathname } = useRouter();
  const { token } = useGetToken();
  const { order } = useSelector(selectAppState);

  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main>
        <PaymentStatusbar currentPage={"order-complete"} />
        <section className="container max-w-5xl mx-auto flex flex-col items-start justify-start gap-3 max-lg:px-3">
          <OrderState orderStatus={order?.status ?? "unknown"} />
          <h6 className="mb-4 font-bold">
            {new Date(order?.createdAt!).toDateString()}
          </h6>
          <article className="w-full flex max-md:flex-col items-center justify-between gap-4 my-6">
            <div className="basis-full md:basis-1/2 flex flex-col">
              <PaymentInformations payment={{ payment: order?.payment }} />
              <OrderAddress addressId={order?.addressId ?? undefined} />
            </div>
            <OrderInvoice
              discountedTotal={order?.discountedTotal ?? 0}
              totalPrice={order?.totalPrice ?? 0}
            />
          </article>
          <article></article>
          <article className="w-full my-3">
            <Link
              href={routes.shop}
              className="custom-button w-full md:w-1/2 mx-auto"
            >
              go shop page
            </Link>
          </article>
        </section>
      </main>
    </>
  );
};

export default Order;
