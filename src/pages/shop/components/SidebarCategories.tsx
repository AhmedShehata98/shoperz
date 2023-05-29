import Link from "next/link";
import React from "react";

export default function SidebarCategories() {
  const categories = [
    {
      pathname: "/TV & audio".split(" ").join("-").toLowerCase(),
      title: "TV & audio",
    },
    {
      pathname: "/smartphone".split(" ").join("-").toLowerCase(),
      title: "smartphone",
    },
    {
      pathname: "/laptops & PCs".split(" ").join("-").toLowerCase(),
      title: "laptops & PCs",
    },
    {
      pathname: "/gadgets".split(" ").join("-").toLowerCase(),
      title: "gadgets",
    },
    {
      pathname: "/gifts".split(" ").join("-").toLowerCase(),
      title: "gifts",
    },
    {
      pathname: "/books".split(" ").join("-").toLowerCase(),
      title: "books",
    },
    {
      pathname: "/toyes".split(" ").join("-").toLowerCase(),
      title: "toyes",
    },
  ];

  return (
    <div className="w-full p-3 bg-Grey-100 flex flex-col items-start justify-center border border-Grey-300 shadow mb-4">
      <h4 className="capitalize mb-4 font-semibold">categories</h4>
      <ul className="grid grid-flow-row gap-2">
        {categories.map((cate, i) => (
          <li key={i} className="flex items-center justify-start">
            <Link
              href={cate.pathname}
              className="text-sm text-Grey-700 capitalize hover:text-Grey-900"
            >
              {cate.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
