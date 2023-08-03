import { routes } from "@/constants/Routes";
import Link from "next/link";
import React from "react";

function FooterCustomerColumn() {
  return (
    <div className="mt-4 lg:mt-0 px-2">
      <b className="capitalize text-lg">customer service</b>
      <ul className="grid grid-flow-row-dense mt-6 gap-3">
        <Link
          className="text-Grey-600 hover:underline"
          href={{
            pathname: routes.myAccount.account,
            query: { section: routes.myAccount.profile },
          }}
        >
          my account
        </Link>
        <Link
          className="text-Grey-600 hover:underline"
          href={{ pathname: routes.shoppingCart }}
        >
          my cart
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"track order"}>
          track order
        </Link>
        <Link
          className="text-Grey-600 hover:underline"
          href={"returns & Exchanges"}
        >
          returns & Exchanges
        </Link>
        <Link
          className="text-Grey-600 hover:underline"
          href={"repair services"}
        >
          repair services
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"support"}>
          support
        </Link>
      </ul>
    </div>
  );
}

export default FooterCustomerColumn;
