import React, { useState } from "react";
import SpecificationsContent from "./SpecificationsContent";
import DescriptionContent from "./DescriptionContent";
import ReviewsContent from "./ReviewsContent";

type Props = {
  description: string;
  specifications: string;
};
export default function InformationData({
  description,
  specifications,
}: Props) {
  const [contentSelectNavbar, setContentSelectNavbar] = useState<
    "description" | "specifications"
  >("description");
  return (
    <section className="container max-w-5xl mx-auto flex flex-col py-4">
      <nav className="w-max flex items-center divide-x border-x divide-gray-200">
        <button
          className={
            contentSelectNavbar === "description"
              ? "px-4 py-3 border-y hover:bg-gray-200 capitalize font-bold bg-gray-200"
              : "px-4 py-3 border-y hover:bg-gray-200 capitalize font-medium"
          }
          onClick={() => setContentSelectNavbar("description")}
        >
          description
        </button>
        <button
          className={
            contentSelectNavbar === "specifications"
              ? "px-4 py-3 border-y hover:bg-gray-200 capitalize font-bold bg-gray-200"
              : "px-4 py-3 border-y hover:bg-gray-200 capitalize font-medium"
          }
          onClick={() => setContentSelectNavbar("specifications")}
        >
          specifications
        </button>
      </nav>
      {contentSelectNavbar === "description" && (
        <DescriptionContent description={description} />
      )}
      {contentSelectNavbar === "specifications" && (
        <SpecificationsContent specifications={specifications} />
      )}
    </section>
  );
}
