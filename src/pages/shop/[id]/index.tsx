import ProductDetails from "@/features/productDetails";
import { wrapper } from "@/redux/store";
import { API_BASE_URL, ENDPOINTS } from "@/services/api/shoppers.api";
import {
  getRunningQueriesThunk,
  shoperzApi,
} from "@/services/shoperzApi.service";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

function ProductPage(props: any) {
  return <ProductDetails {...props} />;
}

export default ProductPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async (context) => {
      const id = context.params?.id as string;

      dispatch(shoperzApi.endpoints.getProductById.initiate(id));
      return Promise.all(dispatch(getRunningQueriesThunk())).then(([res]) => {
        const product = res.data as ProductByIdResponse;
        return {
          props: {
            product: product.data.product,
            isLoading: res.isLoading,
            isError: res.isError,
          },
        };
      });
    }
);
export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await axios({
    baseURL: API_BASE_URL,
    method: "GET",
    url: ENDPOINTS.products.products,
    params: {
      parts: "pagginition,filter",
    },
  });
  const data: ProductsResponse = await res.data;
  const paths = data.data.products.map((product) => ({
    params: { id: product._id, name: product.name },
  }));

  return {
    paths,
    fallback: false,
  };
};
