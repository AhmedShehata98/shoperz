import React, { useState } from "react";
import SpecificationsContent from "./SpecificationsContent";
import DescriptionContent from "./DescriptionContent";
import ReviewsContent from "./ReviewsContent";

export default function InformationData() {
  const [contentSelectNavbar, setContentSelectNavbar] = useState<
    "description" | "specifications" | "reviews"
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
        <button
          className={
            contentSelectNavbar === "reviews"
              ? "px-4 py-3 border-y hover:bg-gray-200 capitalize font-bold bg-gray-200"
              : "px-4 py-3 border-y hover:bg-gray-200 capitalize font-medium"
          }
          onClick={() => setContentSelectNavbar("reviews")}
        >
          reviews
        </button>
      </nav>
      {contentSelectNavbar === "description" && <DescriptionContent />}
      {contentSelectNavbar === "specifications" && <SpecificationsContent />}
      {contentSelectNavbar === "reviews" && <ReviewsContent />}
    </section>
  );
}
