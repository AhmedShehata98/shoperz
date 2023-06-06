import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import Headtitle from "./Headtitle";
import {
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import watch from "../assets/products/watches.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  title: string;
};

const ColumnProducts = ({ title }: Props) => {
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllProductsQuery();
  const handleShowFilterbar = () => {
    filterRef.current?.classList.toggle("filter-sidebar-show");
    document.body.classList.toggle("prevent-scroll");
  };
  const handleApplyFilter = () => {
    console.log("apply filter");
  };

  const [showProducts, setShowProducts] = useState(true);
  function t(page: number): void {
    throw new Error("Function not implemented.");
  }
  const handleAddToCart = (productId: string, quantity: number) => {
    const token = document.cookie.split("=")[1];
    if (token) {
      fetchAddToCart({ productId, quantity, token });
      toast.success("product is added to your cart success");
    } else {
      toast.warning(
        "You are not registered! ,Register first and start your shoping journy"
      );
    }
  };

  return (
    <div className="w-full max-md:items-center flex flex-col gap-5  bg-slate-100 ">
      <Headtitle title={title} />
      {products?.data.products.map((e, i) => {
        if (i < 3)
          return (
            <ProductCard
              key={i}
              productData={e}
              onAddToCart={() => handleAddToCart(e._id, 1)}
            />
          );
      })}
    </div>
  );
};

export default ColumnProducts;
