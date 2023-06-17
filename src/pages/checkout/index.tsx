import Head from "next/head";
import React from "react";
import UserAddress from "../../components/checkoutComponents/UserAddress";
import PaymentMethods from "../../components/checkoutComponents/PaymentMethods";
import Portal from "@/hooks/Protal";
import UserAddressForm from "@/components/UserAddressForm";
import FinalOrderReport from "../../components/checkoutComponents/FinalOrderReport";
import OrderBoxItem from "../../components/checkoutComponents/OrderBoxItem";
import { IoIosCash } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import useGetToken from "@/hooks/useGetToken";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import { MdDiscount } from "react-icons/md";
import OrdersPreviewList from "../../components/checkoutComponents/OrdersPreviewList";

const Checkout = () => {
  const { token } = useGetToken();
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
        <title>checkout</title>
      </Head>
      <main>
        <section className="checkout">
          <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
            <UserAddress />
            <PaymentMethods />
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
