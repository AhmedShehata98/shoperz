import React from "react";

function PaymentWrapper(props: any) {
  return (
    <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
      {props.children}
    </div>
  );
}

export default PaymentWrapper;
