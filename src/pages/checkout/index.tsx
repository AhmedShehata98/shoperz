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
  useGetCartItemsQuery,
  useGetStripePublishableKeyQuery,
  useGetUserAddressListQuery,
} from "@/services/shoperzApi.service";
import { MdDiscount } from "react-icons/md";
import { useRouter } from "next/router";

// Stripe
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import { StripeElementsOptionsClientSecret } from "@stripe/stripe-js";
import Invoices from "@/features/checkout/components/Invoices";
import PaymentWrapper from "@/features/checkout/components/PaymentWrapper";
import OrderItem from "@/features/checkout/components/OrderItem";
import { toast } from "react-toastify";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import AddressWrpapper from "@/features/checkout/components/AddressWrpapper";
import AddressCardItem from "@/features/checkout/components/AddressCardItem";
import CustomButton from "@/components/CustomButton";

const Checkout = () => {
  const { token } = useGetToken();
  const { pathname } = useRouter();
  const { clientSecret, order } = useSelector(selectAppState);
  const [showAddressForm, setShowAddressForm] = React.useState(false);
  const shippingCost = 50;
  const {
    data: userCart,
    isLoading: loadingUserCart,
    isSuccess: isSuccessUserCart,
  } = useGetCartItemsQuery(token!, { skip: !token ? true : false });

  const { data: PKResponse } = useGetStripePublishableKeyQuery(
    { token },
    { skip: token ? false : true }
  );
  const appearance: Appearance = {
    theme: "stripe",
  };
  const stripeOptions: StripeElementsOptionsClientSecret = {
    clientSecret,
    appearance,
  };

  const showAddressFormModel = React.useCallback(
    (state: boolean) => setShowAddressForm(state),
    []
  );

  // useEffect(() => {
  //   if (isSuccessUserCart && !stripeOptions.clientSecret) {
  //     if (userAddressList?.data.userAddresses?.length! >= 1) {
  //       const selectedAddressTarget = userAddressList?.data.userAddresses.find(
  //         (adrs) => adrs.default === true
  //       );

  //       sendOrder({
  //         addressId: selectedAddressTarget?._id,
  //         method: "card",
  //         token,
  //       })
  //         .then(() => {
  //           if (orderResponse?.data !== null) {
  //             toast.info("The order has been sent successfully");
  //           } else {
  //             toast.info(JSON.stringify(orderResponse.error));
  //           }
  //         })
  //         .catch((err: any) => toast.error(err.message));
  //     }
  //   }
  // }, [isSuccessFetchUserAddress]);
  // useEffect(() => {
  //   document.cookie = `CLINT_SCRT=${orderResponse?.data.clientSecret}`;
  // }, [orderResponse?.data.clientSecret]);
  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main>
        <PaymentStatusbar currentPage={pathname.split("/")[1] as "checkout"} />
        <section className="checkout">
          <div className="w-4/6 flex flex-col h-full">
            <AddressWrpapper>
              <AddressCardItem />
              <CustomButton extraClassName="w-full">add address</CustomButton>
              {showAddressForm && (
                <Portal>
                  <UserAddressForm setIsShowing={setShowAddressForm} />
                </Portal>
              )}
            </AddressWrpapper>
            <PaymentWrapper>
              {stripeOptions.clientSecret && PKResponse?.data.pk && (
                <Elements
                  options={stripeOptions}
                  stripe={loadStripe(PKResponse?.data.pk as string)}
                >
                  <CheckoutForm />
                </Elements>
              )}
              {showAddressForm && (
                <Portal>
                  <UserAddressForm setIsShowing={showAddressFormModel} />
                </Portal>
              )}
            </PaymentWrapper>
          </div>
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
