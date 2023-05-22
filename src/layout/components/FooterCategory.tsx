import React from "react";

type Props = {
  title: string;
  cate: string[];
};

const FooterCategory = ({ title, cate }: Props) => {
  return (
    <div className="p-4">
      <h4 className="text-gray-900 font-semibold py-1">{title}</h4>
      <ul>
        {cate.map((e, i) => {
          return (
            <li
              key={i}
              className="text-Grey-700 cursor-pointer hover:text-Grey-900"
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCategory;
