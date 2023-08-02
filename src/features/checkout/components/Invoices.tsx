import React from "react";

function Invoices(props: any) {
  return (
    <div className="basis-1/3 max-lg:basis-full flex flex-col items-center justify-between gap-2">
      {props.children}
    </div>
  );
}

export default Invoices;
