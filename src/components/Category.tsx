import React from "react";
import Headtitle from "./Headtitle";
import CateCard from "./CateCard";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="bg-slate-100">
      <div className="container pb-10 mx-auto">
        <Headtitle title="Categories" />
        <div className="grid grid-cols-4 w-full py-8 gap-8">
          <CateCard />
          <CateCard />
          <CateCard />
          <CateCard />
          <CateCard />
          <CateCard />
          <CateCard />
          <CateCard />
        </div>
      </div>
    </div>
  );
};

export default Category;
