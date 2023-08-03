import Link from "next/link";
import React from "react";

function FooterUsefulLinksColumn() {
  return (
    <div className="mt-4 lg:mt-0 px-2">
      <b className="capitalize text-lg">useful Links</b>
      <ul className="grid grid-flow-row-dense mt-6 gap-3">
        <Link className="text-Grey-600 hover:underline" href={"about"}>
          about
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"content"}>
          content
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"whishlist"}>
          whishlist
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"compare"}>
          compare
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"FAQ"}>
          FAQ
        </Link>
        <Link
          className="text-Grey-600 hover:underline"
          href={"terms-&-conditions"}
        >
          terms & conditions
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"privacy-policy"}>
          privacy policy
        </Link>
        <Link className="text-Grey-600 hover:underline" href={"cookie-policy"}>
          cookie policy
        </Link>
      </ul>
    </div>
  );
}

export default FooterUsefulLinksColumn;
