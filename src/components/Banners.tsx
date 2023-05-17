import React from "react";
import Banner from "./Banner";

type Props = {};

const Banners = (props: Props) => {
  return (
    <div className="container pb-10 mx-auto">
      <div className="grid lg:grid-cols-2 justify-center items-center gap-x-8 max-lg:gap-y-8">
        <Banner />
        <Banner />
      </div>
    </div>
  );
};
export default Banners;
