/* eslint-disable react/display-name */
import React, { LegacyRef, forwardRef, useEffect } from "react";
import SidebarCategories from "./SidebarCategories";
import Brands from "./Brands";
import Price from "./Price";
import Colors from "./Colors";
import CustomButton from "@/components/CustomButton";
import { BiFilterAlt } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
type Props = {
  handleClose: React.MouseEventHandler;
  handleApply: React.MouseEventHandler;
};

const FiltersSidebar = forwardRef(
  ({ handleApply, handleClose }: Props, ref: any) => {
    return (
      <aside ref={ref} className="filter-sidebar">
        <SidebarCategories />
        <Brands />
        <Price />
        <Colors />
        <div className="w-full grid max-lg:grid-cols-2 grid-cols-1 items-center justify-center gap-3 py-4 px-4">
          <CustomButton
            type="button"
            extraClassName="rounded-full py-3"
            onClick={handleApply}
          >
            <p>apply</p>
            <BiFilterAlt />
          </CustomButton>
          <CustomButton
            type="button"
            extraClassName="lg:hidden rounded-full border bg-white border-black text-black hover:bg-Grey-200 py-3"
            onClick={handleClose}
          >
            <p>close</p>
            <RiCloseFill />
          </CustomButton>
        </div>
      </aside>
    );
  }
);

export default FiltersSidebar;
