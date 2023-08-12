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
      pmin: Number(fd.get("pmin")) ?? 50,
      pmax: Number(fd.get("pmax")),
    };
    const colors = fd.get("color")?.toString();

    const searchParams = new URLSearchParams();
    if (category !== "none") searchParams.append("category", category!);
    if (brands.length >= 1) searchParams.append("brands", brands.join(",")!);
    if (price.pmin !== 0) searchParams.append("pmin", price.pmin.toString());
    if (price.pmax !== 0) searchParams.append("pmax", price.pmax.toString());
    if (colors !== "") searchParams.append("colors", colors!);

    push(
      {
        pathname,
        search: searchParams as any,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSelectFilterQuery = (
    filterName: string,
    value: string,
    condition: () => boolean
  ) => {
    const searchParams = new URLSearchParams();
    if (condition()) {
      searchParams.append(filterName, value);
    }
    push({ pathname, search: searchParams.toString() }, undefined, {
      shallow: true,
    });
  };

  return (
    <form
      action={""}
      ref={ref}
      className="filter-sidebar"
      onSubmit={submitHandler}
    >
      <SidebarCategories
        onSelectCategory={({ target: { name, value } }) =>
          handleSelectFilterQuery(name, value, () => value !== "none")
        }
      />
      <Brands
        OnSelectBrand={({ target: { name, value } }) =>
          handleSelectFilterQuery(name, value, () => value !== "none")
        }
      />
      <Price />
      <Colors
        onSelectColor={({ target: { name, value } }) =>
          handleSelectFilterQuery(name, value, () => value !== "none")
        }
      />
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
