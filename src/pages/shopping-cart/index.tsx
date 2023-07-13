import PaymentStatusbar from "@/components/PaymentStatusbar";
import Head from "next/head";
import React, { useState } from "react";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import useGetToken from "@/hooks/useGetToken";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import Portal from "@/hooks/Protal";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import CartDetailsWrapper from "@/features/Cart/components/CartDetailsWrapper";
import { useRouter } from "next/router";

const OfferItem = dynamic(
  () => import("@/features/Cart/components/OfferItem"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const Cart = dynamic(() => import("@/features/Cart/components/Cart"), {
  loading: () => <QuickLoadingModul />,
});
const OrderReport = dynamic(
  () => import("@/features/Cart/components/OrderSummery"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const AlertDialog = dynamic(
  () => import("../../features/Cart/components/AlertDialog"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

function ShoppingCart(props: any) {
  const { token } = useGetToken();
  const { isLoggedIn } = useSelector(selectAppState);
  const { pathname } = useRouter();
  const {
    data: userCartData,
    isLoading,
    isError,
    isSuccess,
  } = useGetCartItemsQuery(token!, {
    skip: !Boolean(token),
    refetchOnMountOrArgChange: 900,
  });
  const [showConfirmIsUser, setShowConfirmIsUser] = useState(false);

  return (
    <>
      <Head>
        <title>{pathname.split("/")[1]}</title>
      </Head>
      <main className="w-full min-h-screen flex items-center justify-start flex-col">
        <PaymentStatusbar
          currentPage={pathname.split("/")[1] as "shopping-cart"}
        />
        <section className="shopping-cart-wrapper">
          <CartDetailsWrapper
            cartItems={userCartData?.userCart.items?.length || 0}
            isAuth={isLoggedIn}
          >
            <Cart
              cartItems={userCartData?.userCart.items || []}
              total={userCartData?.cartTotal || 0}
              apiCallState={{ isLoading, isError, isSuccess }}
            />
            <OrderReport
              cartTotal={userCartData?.cartTotal || 0}
              discountedTotal={userCartData?.discountedTotal || 0}
              ProductsQuantity={userCartData?.userCart.items?.length || 0}
              loggedin={Boolean(isLoggedIn)}
              setShowConfirmIsUser={setShowConfirmIsUser}
            />
            {showConfirmIsUser && (
              <Portal>
                <AlertDialog setShowConfirmIsUser={setShowConfirmIsUser} />
              </Portal>
            )}
          </CartDetailsWrapper>
          <div className="w-full flex flex-col items-center justify-center bg-Grey-100 gap-3">
            <header className="grid grid-cols-2 capitalize text-Primary-800 text-lg font-medium py-3 max-lg:px-3">
              <p>delivery</p>
              <p> free returns</p>
            </header>
            <ul className="offers-list">
              <OfferItem
                offerdata={{
                  Icon: <AiOutlineTransaction />,
                  title:
                    "Order by 10pm for free next day delivery on Orders overs $100",
                  subTitle:
                    "We deliver Monday to Saturday - excluding Holidays",
                }}
              />
              <OfferItem
                offerdata={{
                  Icon: <BsBoxSeam />,
                  title: "Free next day delivery to stores.",
                  subTitle:
                    "Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100",
                }}
              />
              <OfferItem
                offerdata={{
                  Icon: <MdOutlineLocalShipping />,
                  title: "",
                  subTitle:
                    "30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE",
                }}
              />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default ShoppingCart;
