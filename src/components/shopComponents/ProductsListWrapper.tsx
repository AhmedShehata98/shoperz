import clsx from "clsx";
import React, { ReactNode } from "react";
import ProductCardSkeleton from "../ProductCardSkeleton";
import dynamic from "next/dynamic";
const ErrorHappened = dynamic(() => import("../ErrorHappened"), {
  loading: () => <ProductCardSkeleton dir="list" />,
});

type Props = {
  apiCallState: {
    isError: boolean;
    isLoading: boolean;
    errorMessage?: string;
  };
  view: "list" | "grid";
  productsLength: number | undefined;
  children: ReactNode | ReactNode[];
};
function ProductsListWrapper(props: Props) {
  return (
    <ul
      className={clsx(
        "products-viewAs-list",
        props.view === "grid" && "products-viewAs-grid"
      )}
    >
      {props.apiCallState.isLoading &&
        [...Array(props.productsLength || 4).keys()].map((__, idx) => (
          <ProductCardSkeleton dir={props.view} key={idx} />
        ))}
      {props.apiCallState.isError && (
        <ErrorHappened
          errorMsg={
            props.apiCallState.errorMessage ||
            "Ooops , maybe server down or network issue"
          }
        />
      )}
      {!props.apiCallState.isLoading &&
        !props.apiCallState.isError &&
        props?.productsLength! >= 1 &&
        props.children}
    </ul>
  );
}

export default ProductsListWrapper;
