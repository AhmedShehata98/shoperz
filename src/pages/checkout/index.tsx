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
import {
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
  useGetCartItemsQuery,
} from "@/services/shoperzApi.service";
import { MdDiscount } from "react-icons/md";
import { useRouter } from "next/router";

// Stripe
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import { StripeElementsOptionsClientSecret } from "@stripe/stripe-js";
import Invoices from "@/features/checkout/components/Invoices";
import PaymentAndAddressWrapper from "@/features/checkout/components/PaymentAndAddressWrapper";
import OrderItem from "@/features/checkout/components/OrderItem";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const Checkout = () => {
  const { token } = useGetToken();
  const { pathname } = useRouter();
  const [sendOrder, { isError: isErrorOrder, isLoading: isLoadingOrder }] =
    useCreateOrderMutation();
  const [showAddressForm, setShowAddressForm] = React.useState(false);
  const shippingCost = 50;
  const {
    data: userCart,
    isLoading: loadingUserCart,
    isSuccess: isSuccessUserCart,
  } = useGetCartItemsQuery(token!, { skip: !token ? true : false });
  const [
    sendPaymentIntentResponse,
    { data: clientSecret, isLoading, isSuccess, isError },
  ] = useCreatePaymentIntentMutation();
  const appearance: Appearance = {
    theme: "flat",
  };
  const stripeOptions: StripeElementsOptionsClientSecret = {
    clientSecret: clientSecret as string,

    appearance,
  };

  const showAddressFormModel = React.useCallback(
    (state: boolean) => setShowAddressForm(state),
    []
  );

  useEffect(() => {
    if (isSuccessUserCart) {
      //sendPaymentIntentResponse(userCart?.userCart.items);
    }
  }, [loadingUserCart, isSuccessUserCart]);

  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main>
        <PaymentStatusbar currentPage={pathname.split("/")[1] as "checkout"} />
        <section className="checkout">
          <PaymentAndAddressWrapper>
            <UserAddress />
            {/* <PaymentMethodsForm /> */}
            {clientSecret && (
              <Elements options={stripeOptions} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
            {showAddressForm && (
              <Portal>
                <UserAddressForm setIsShowing={showAddressFormModel} />
              </Portal>
            )}
          </PaymentAndAddressWrapper>
          <Invoices>
            <OrdersPreviewList cartItems={userCart?.userCart.items || []}>
              <OrderItem />
            </OrdersPreviewList>
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
          </Invoices>
        </section>
      </main>
    </>
  );
};

export default Checkout;
