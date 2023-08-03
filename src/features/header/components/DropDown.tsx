import React from "react";
import { motion } from "framer-motion";
import FooterCategory from "@/layout/components/FooterCategory";
import Image from "next/image";
import product from "@/assets/products/monitor.png";
type Props = {};

const DropDown = (props: Props) => {
  const slideMenuVariant = {
    visible: { opacity: 1, translateY: 0, scaleY: 1 },
    hidden: { opacity: 0, translateY: "-25px", scaleY: 0.95 },
  };
  const pl = [
    {
      title: "TV and Accessories",
      cate: ["TVs", "Full HD", "Ultra 4k", "Oled", "Toys"],
    },
    {
      title: "TV and Accessories",
      cate: ["TVs", "Full HD", "Ultra 4k", "Oled", "Toys"],
    },
    {
      title: "TV and Accessories",
      cate: ["TVs", "Full HD", "Ultra 4k", "Oled", "Toys"],
    },
    {
      title: "TV and Accessories",
      cate: ["TVs", "Full HD", "Ultra 4k", "Oled", "Toys"],
    },
    {
      title: "TV and Accessories",
      cate: ["TVs", "Full HD", "Ultra 4k", "Oled", "Toys"],
    },
  ];
  console.log(pl);
  return (
    <motion.article
      variants={slideMenuVariant}
      initial={"hidden"}
      animate={"visible"}
      className="grid container mx-auto rounded-b-xl py-6 p-12 absolute z-10 w-full bg-white  grid-rows-2 grid-flow-col"
    >
      {pl.map((el, i) => {
        return <FooterCategory key={i} title={el.title} cate={el.cate} />;
      })}

      <div className="row-span-2">
        <Image src={product} alt="product" />
      </div>
    </motion.article>
  );
};

export default DropDown;
