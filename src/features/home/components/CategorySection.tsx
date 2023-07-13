import React from "react";
import Headtitle from "@/components/Headtitle";
import CateCard from "./CateCard";
import { useGetAllCategoriesQuery } from "@/services/shoperzApi.service";

type Props = {};

const CategorySection = (props: Props) => {
  const { data, isError, isLoading } = useGetAllCategoriesQuery();

  return (
    <div className="bg-slate-100 px-4">
      <div className="container max-w-5xl pb-10 mx-auto">
        <Headtitle title="Categories" />
        <ul className="grid md:grid-cols-2  lg:grid-cols-4 w-full py-8 gap-8">
          {data?.data.categories?.map((category) => (
            <CateCard key={category._id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
