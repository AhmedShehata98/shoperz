import Head from "next/head";
import React, { useEffect, useState } from "react";
import UserAddress from "@/features/checkout/components/UserAddress";
import OrderBoxItem from "@/components/OrderBoxItem";
import UserAddressForm from "@/components/UserAddressForm";
import FinalOrderReport from "@/features/checkout/components/FinalOrderReport";
import OrdersPreviewList from "@/features/checkout/components/OrdersPreviewList";
import PaymentMethodsForm from "@/features/checkout/components/PaymentMethodsForm";
import PaymentStatusbar from "@/components/PaymentStatusbar";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import Portal from "@/hooks/Protal";
import useGetToken from "@/hooks/useGetToken";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import { MdDiscount } from "react-icons/md";
import { useRouter } from "next/router";

const Checkout = () => {
  const { token } = useGetToken();
  const { pathname } = useRouter();
  const [showAddressForm, setShowAddressForm] = React.useState(false);
  const shippingCost = 50;
  const { data: userCart, isLoading: loadingUserCart } = useGetCartItemsQuery(
    token!,
    { skip: !token ? true : false }
  );

  const showAddressFormModel = React.useCallback((state: boolean) => {
    setShowAddressForm(state);
  }, []);
  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main>
        <PaymentStatusbar currentPage={pathname.split("/")[1] as "checkout"} />
        <section className="checkout">
          <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
            <UserAddress />
            <PaymentMethodsForm />

            {showAddressForm ? (
              <Portal>
                <UserAddressForm setIsShowing={showAddressFormModel} />
              </Portal>
            ) : null}
          </div>
          <div className="basis-1/3 max-lg:basis-full flex flex-col items-center justify-between gap-2">
            <OrdersPreviewList cartItems={userCart?.userCart.items || []} />
            <FinalOrderReport discountedTotal={userCart?.discountedTotal || 0}>
              <OrderBoxItem
                data={{
                  title: "total",
                  value: userCart?.cartTotal! + shippingCost,
                }}
                Icon={<IoIosCash className="text-xl" />}
              />
              <OrderBoxItem
                data={{
                  title: "Shipping Cost",
                  value: shippingCost,
                }}
                Icon={<FaShippingFast className="text-xl" />}
              />
              <OrderBoxItem
                data={{
                  title: "after discount",
                  value: userCart?.discountedTotal! + shippingCost,
                }}
                Icon={<MdDiscount className="text-xl" />}
              />
            </FinalOrderReport>
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
