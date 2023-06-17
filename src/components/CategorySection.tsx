import React from "react";
import Headtitle from "./Headtitle";
import CateCard from "./CateCard";

type Props = {};

const CategorySection = (props: Props) => {
  return (
    <div className="bg-slate-100">
      <div className="container max-w-5xl pb-10 mx-auto">
        <Headtitle title="Categories" />
        <div className="grid md:grid-cols-2  lg:grid-cols-4 w-full py-8 gap-8">
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

export default CategorySection;
