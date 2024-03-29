import React from "react";
import { motion } from "framer-motion";
import { routes } from "@/constants/Routes";
import Image from "next/image";
import { useRouter } from "next/router";
type Props = {
  searchResult: Products[] | undefined;
  query: string | undefined;
};
export default function SearchResultList({ query, searchResult }: Props) {
  const { push } = useRouter();
  const { shop } = routes;
  const getProductPreview = (id: string) => {
    push(`${shop}/${id}`);
  };

  return (
    <motion.ul
      className="absolute z-30 top-full left-0 w-full lg:w-3/6 lg:top-3/4 lg:left-1/2 lg:-translate-x-1/2 shadow-lg flex flex-col gap-2 bg-gray-300 px-4 py-2"
      id="search-products-wrapper"
    >
      {/* <li>there is no products with this name .</li> */}
      {searchResult?.map((product) => (
        <li
          key={product._id}
          className="flex gap-4 justify-between items-start p-2 border border-transparent cursor-pointer hover:border-gray-300 rounded-md hover:bg-gray-200"
          onClick={() => getProductPreview(product._id)}
        >
          <figure className="w-16 h-16 flex items-stretch rounded-md overflow-hidden shadow-md">
            <img
              src={
                typeof product.thumbnail === "object"
                  ? (product.thumbnail as any).url
                  : product.thumbnail
              }
              alt={product.name}
              width={64}
              height={64}
              className="w-full object-center object-cover"
            />
          </figure>
          <span className="w-4/5 lg:w-11/12">
            <p className="text-sm text-Grey-700 font-semibold uppercase">
              {product?.category_id?.name ?? "NA-NA"}
            </p>
            <h5 className="max-w-full overflow-x-hidden text-Grey-800 uppercase">
              {product.name}
            </h5>
            <span className="flex items-center justify-start gap-3">
              <p>delivery cost : </p>
              <b>
                {product.deliveryCost <= 0
                  ? "free"
                  : product.deliveryCost?.toLocaleString("en-Eg", {
                      style: "currency",
                      currency: "EGP",
                    })}
              </b>
            </span>
          </span>
        </li>
      ))}
    </motion.ul>
  );
}
