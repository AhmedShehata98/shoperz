import { useGetProductByIdQuery } from "@/services/shoperzApi.service";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "../utils/ProductByIdFetch";

type Props = {
  productsList: Pick<Order, "products"> | undefined;
  children: React.ReactNode;
};
function OrderProductsList({ productsList, children }: Props) {
  const [isLoading, setIsloading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  const [fetchedProductsList, setFetchProductsList] =
    useState<{ product: Products; quantity: number }[]>();

  const renderProducts = (product: Products, quantity: number) => {
    return React.Children.map(children, (child) =>
      React.cloneElement(child as any, { productData: product })
    );
  };
  useEffect(() => {
    if (productsList?.products) {
      productsList?.products.forEach((prd) => {
        fetchProductById(prd?.productId as string).then((product) => {
          setIsloading(false);
          setIsSuccess(true);
          const newProductsList: { product: Products; quantity: number }[] = [];
          newProductsList.push({
            product: product.data.product,
            quantity: prd.quantity,
          });
          setFetchProductsList(newProductsList);
        });
      });
    }
  }, []);

  return (
    <div className="w-full my-4 ">
      <h3 className="text-xl text-Grey-900 capitalize mb-3">products list :</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-Grey-200 p-3">
        {isSuccess &&
          !isLoading &&
          fetchedProductsList?.map((prod) =>
            renderProducts(prod.product, prod.quantity)
          )}
      </ul>
    </div>
  );
}

export default OrderProductsList;
