import React from "react";

type Props = {
  title: string;
};

const Headtitle = ({ title }: Props) => {
  return (
    <div className="text-2xl w-fit  border-b-Primary-600 border-b-[1px] py-3 font-semibold mb-4">
      {title}
    </div>
  );
};

export default Headtitle;
