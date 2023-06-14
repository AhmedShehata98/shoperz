import React from "react";

function CartDrowerItems(props: any) {
  return (
    <ul className="w-full grid grid-flow-row-dense gap-4 mb-5 mt-2">
      {props.children}
    </ul>
  );
}

export default CartDrowerItems;
