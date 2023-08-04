import Head from "next/head";
import React from "react";
import OrderBoxItem from "@/components/OrderBoxItem";
import UserAddressForm from "@/components/UserAddressForm";
import FinalOrderReport from "@/features/checkout/components/FinalOrderReport";
import OrdersPreviewList from "@/features/checkout/components/OrdersPreviewList";
import PaymentMethods from "@/features/checkout/components/PaymentMethods";
import PaymentStatusbar from "@/components/PaymentStatusbar";
import { FaShippingFast } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import Portal from "@/hooks/Protal";
import useGetToken from "@/hooks/useGetToken";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import { MdDiscount } from "react-icons/md";
import { useRouter } from "next/router";

// Stripe
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import Invoices from "@/features/checkout/components/Invoices";
import PaymentWrapper from "@/features/checkout/components/PaymentWrapper";
import OrderItem from "@/features/checkout/components/OrderItem";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import AddressWrapper from "@/features/checkout/components/AddressWrapper";
import AddressCardItem from "@/features/checkout/components/AddressCardItem";
import CustomButton from "@/components/CustomButton";

const Checkout = () => {
  const { token } = useGetToken();
  const { pathname } = useRouter();
  const { clientSecret } = useSelector(selectAppState);
  const [showAddressForm, setShowAddressForm] = React.useState(false);
  const shippingCost = 50;
  const {
    data: userCart,
    isLoading: loadingUserCart,
    isSuccess: isSuccessUserCart,
  } = useGetCartItemsQuery(token!, { skip: !token ? true : false });

  const showAddressFormModel = React.useCallback(
    (state: boolean) => setShowAddressForm(state),
    []
  );

  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main>
        <PaymentStatusbar currentPage={pathname.split("/")[1] as "checkout"} />
        <section className="checkout">
          <div className="w-4/6 flex flex-col h-full">
            <AddressWrapper>
              <AddressCardItem />
              <CustomButton extraClassName="w-full">add address</CustomButton>
              {showAddressForm && (
                <Portal>
                  <UserAddressForm setIsShowing={setShowAddressForm} />
                </Portal>
              )}
            </AddressWrapper>
            <PaymentWrapper>
              <PaymentMethods />
              <CheckoutForm />

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
