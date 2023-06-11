import FinalOrderReport from "@/pages/order/components/FinalOrderReport";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import OrdersPreviewListProps from "./OrdersPreviewList";
import Portal from "@/hooks/Protal";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import useGetToken from "@/hooks/useGetToken";
import { useGetCartItemsQuery } from "@/services/shoperzApi.service";
import OrderBoxItem from "./OrderBoxItem";
import { FaShippingFast } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { IoIosCash } from "react-icons/io";

const UserAddress = dynamic(() => import("./UserAddress"), {
  loading: () => <QuickLoadingModul />,
});
const PaymentMethods = dynamic(() => import("./PaymentMethods"), {
  loading: () => <QuickLoadingModul />,
});
const UserAddressForm = dynamic(() => import("@/components/UserAddressForm"), {
  loading: () => <QuickLoadingModul />,
});

interface CheckoutProps {}

function CheckoutComponent() {
  const { token } = useGetToken();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const shippingCost = 50;
  const { data: userCart, isLoading: loadingUserCart } = useGetCartItemsQuery(
    token!,
    { skip: !token ? true : false }
  );

  const showAddressFormModel = useCallback((state: boolean) => {
    setShowAddressForm(state);
  }, []);

  return (
    <motion.section
      variants={{
        visible: { opacity: 1, translateX: "0px" },
        hidden: { opacity: 0, translateX: "-15px" },
      }}
      initial={"hidden"}
      animate={"visible"}
      className="checkout-component "
    >
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
        <OrdersPreviewListProps cartItems={userCart?.userCart.items || []} />
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
    </motion.section>
  );
}

export default CheckoutComponent;
