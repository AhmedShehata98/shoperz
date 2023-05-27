import CustomButton from "@/components/CustomButton";
import React from "react";
type Props = {
  title: string;
};

function MyOrders({ title }: Props) {
  return (
    <div className="w-full lg:basis-3/4 bg-white border shadow py-3 px-5">
      <header className="flex items-start justify-between mt-6 mb-3 ">
        <h3 className="text-xl capitalize ">{title}</h3>
      </header>
      <ul></ul>
    </div>
  );
}

export default MyOrders;
