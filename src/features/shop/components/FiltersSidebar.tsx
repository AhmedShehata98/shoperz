/* eslint-disable react/display-name */
import React, { useEffect, forwardRef } from "react";
import SidebarCategories from "./SidebarCategories";
import Brands from "./Brands";
import Price from "./Price";
import Colors from "./Colors";
import CustomButton from "@/components/CustomButton";
import { BiFilterAlt } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/router";

type Props = {
  handleClose: React.MouseEventHandler;
};

const FiltersSidebar = forwardRef(({ handleClose }: Props, ref: any) => {
  const { push, pathname, query } = useRouter();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const category = fd.get("category")?.toString();
    const brands = fd.getAll("brand") as string[];
    const price = {
      pmin: fd.get("pmin")?.toString(),
      pmax: fd.get("pmax")?.toString(),
    };
    const colors = fd.get("color")?.toString();

    // const queries = ['category',category, 'brands',brands.join(","),"pmin", price.pmin,"pmax", price.pmax, 'color',colors];
    const searchParams = new URLSearchParams();
    if (category) searchParams.append("category", category!);
    if (brands.length >= 1) searchParams.append("brands", brands.join(",")!);
    if (price.pmin > 50) searchParams.append("pmin", price.pmin!);
    if (price.pmax) searchParams.append("pmax", price.pmax!);
    if (colors !== "") searchParams.append("colors", colors!);

    // const queries = {
    //   category: category ? category : undefined,
    //   brands: brands.length >= 1 ? brands.join(",") : undefined,
    //   pmin: price.pmin ? price.pmin : undefined,
    //   pmax: price.pmax ? price.pmax : undefined,
    //   colors: colors ? colors : undefined,
    // };

    push(
      {
        pathname,
        // query: searchParams.toString(),
        search: searchParams,
        // query: queries,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <form
      action={""}
      ref={ref}
      className="filter-sidebar"
      onSubmit={submitHandler}
    >
      <SidebarCategories />
      <Brands />
      <Price />
      <Colors />
      <div className="w-full grid max-lg:grid-cols-2 grid-cols-1 items-center justify-center gap-3 py-4 px-4">
        <CustomButton type="submit" extraClassName="rounded-full py-3">
          <p>apply</p>
          <BiFilterAlt />
        </CustomButton>
        <CustomButton
          type="submit"
          extraClassName="lg:hidden rounded-full border bg-white border-black text-black hover:bg-Grey-200 py-3"
          onClick={handleClose}
        >
          <p>close</p>
          <RiCloseFill />
        </CustomButton>
      </div>
    </form>
  );
});

export default FiltersSidebar;
