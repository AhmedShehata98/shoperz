import React from "react";

type Props = {};

const LoadingProducts = (props: Props) => {
  return (
    <div className="flex gap-x-2 justify-center items-center">
      <div className="animate-spin w-6 h-6 rounded-full border-Primary-600 border-r-transparent border-[2px]"></div>
      <h5 className="text-lg">Processing...</h5>
    </div>
  );
};

export default LoadingProducts;
