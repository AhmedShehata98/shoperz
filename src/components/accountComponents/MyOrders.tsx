import CustomButton from "@/components/CustomButton";
import OrderCard from "@/features/account/components/orders/OrderCard";
import OrdersListWrapper from "@/features/account/components/orders/OrdersListWrapper";
import useGetToken from "@/hooks/useGetToken";
import { useGetUserOrdersQuery } from "@/services/shoperzApi.service";
import React, { useState } from "react";
type Props = {
  title: string;
};

function MyOrders({ title }: Props) {
  const [limitOrders, setLimitOrders] = useState<number>(4);
  const [pageOfOrders, setPageOfOrders] = useState<number>(1);
  const { token } = useGetToken();
  const {
    data: orderResponse,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserOrdersQuery(
    { limit: limitOrders, page: pageOfOrders, token },
    { skip: token ? false : true }
  );

  return (
    <div className="w-full lg:basis-3/4 bg-white border shadow py-3 px-5">
      <header className="flex items-start justify-between mt-6 mb-3 ">
        <h3 className="text-xl capitalize ">{title}</h3>
      </header>
      <OrdersListWrapper
        orders={orderResponse?.data!}
        apiCalState={{ isSuccess, isLoading, isError }}
      >
        <OrderCard />
      </OrdersListWrapper>
      {/* <PagginitionButtons actualProductsLength={orderResponse?.data} /> */}
    </div>
  );
}

export default MyOrders;
