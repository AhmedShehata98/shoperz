import React from "react";

type Props = {
  orders: Order[];
  apiCalState: {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
  children: React.ReactNode | React.ReactNode[];
};
function OrdersListWrapper({
  orders,
  apiCalState: { isError, isLoading, isSuccess },
  children,
}: Props) {
  const renderOrdersChildren = (order: Order) =>
    React.Children.map(children as any, (child) =>
      React.cloneElement(child, { order })
    );

  return (
    <div className="w-full bg-Grey-100 p-2 mb-5">
      <ul className="grid grid-cols-1 gap-3">
        {!isLoading &&
          isSuccess &&
          orders?.map((order) => renderOrdersChildren(order))}
      </ul>
    </div>
  );
}

export default OrdersListWrapper;
