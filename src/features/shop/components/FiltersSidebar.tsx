/* eslint-disable react/display-name */
import React, { FormEventHandler, forwardRef } from "react";
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
  handleApply: React.FormEvent<HTMLFormElement>;
};

const FiltersSidebar = forwardRef(
  ({ handleApply, handleClose }: Props, ref: any) => {
    const { push, pathname } = useRouter();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const fd = new FormData(event.currentTarget);
      const values = [...fd.values()].map((value) =>
        value === "on" ? true : false
      );
      const keys = [...fd.keys()];
      const newEntries = [keys, values];
      console.log(keys);
      console.log(Object.fromEntries(newEntries));
      const queries = Object.fromEntries([...fd.entries()]);
      // push({
      //   pathname,
      //   query: queries!,
      // });
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
          <CustomButton
            type="submit"
            extraClassName="rounded-full py-3"
            // onClick={handleApply}
          >
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
  }
);

export default FiltersSidebar;
