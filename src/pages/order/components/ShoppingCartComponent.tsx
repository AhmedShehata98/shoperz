import React, { useState, useMemo } from "react";
import Portal from "../../../hooks/Protal";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import OrderReport from "./OrderReport";
import Cart from "./Cart";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import AlertDialog from "./AlertDialog";
import { getProducts } from "@/services/api/shoppers.api";
import { ICart } from "@/models/shopperz.model";
import OfferItem from "./OfferItem";

interface ShoppingCartComponentProps {}
function ShoppingCartComponent() {
  const [showConfirmIsUser, setShowConfirmIsUser] = useState(false);

  ////////////////////
  //
  //
  let loggedin = true;
  //
  //
  ////////////////////

  const { data, isLoading, isFetched, isError } = useQuery<
    void,
    any,
    { products: Array<ICart> },
    Array<string>
  >({
    queryKey: ["cart"],
    queryFn: getProducts,
  });

  const memoziedData = useMemo(() => {
    if (isFetched) {
      let randomQuantity = Math.floor(Math.random() * 3);
      let fakeData = data?.products.slice(5, 10).map((prev: any) => ({
        ...prev,
        quantity: randomQuantity,
        currency: "L.E",
        totalPrice: prev.price * randomQuantity,
      }));
      return fakeData;
    } else {
      return [];
    }
  }, [data, isLoading]);

  return (
    <motion.article
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="shopping-cart-component"
    >
      <section className="shopping-cart-details">
        <Cart
          cartItems={memoziedData}
          apiCallState={{ isLoading, isFetched, isError }}
        />
        <OrderReport
          orders={memoziedData}
          loggedin={loggedin}
          setShowConfirmIsUser={setShowConfirmIsUser}
          apiCallState={{ isLoading, isFetched, isError }}
        />
        {showConfirmIsUser && (
          <Portal>
            <AlertDialog setShowConfirmIsUser={setShowConfirmIsUser} />
          </Portal>
        )}
      </section>
      <section className="w-full flex flex-col items-center justify-center bg-Grey-100 gap-3">
        <header className="container max-w-5xl mx-auto grid grid-cols-2 capitalize text-Primary-800 text-lg font-medium py-3 max-lg:px-3">
          <p>delivery</p>
          <p> free returns</p>
        </header>
        <ul className="offers-list">
          <OfferItem
            offerdata={{
              Icon: <AiOutlineTransaction />,
              title:
                "Order by 10pm for free next day delivery on Orders overs $100",
              subTitle: "We deliver Monday to Saturday - excluding Holidays",
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
      </section>
    </motion.article>
  );
}

export default ShoppingCartComponent;
