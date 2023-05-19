import React from "react";
import Image, { StaticImageData } from "next/image";
import iph from "../assets/icons-feat/shield.svg";
type Props = {
  src: StaticImageData & string;
  fontTitle: string;
  lightTitle: string;
};

const ShopFeat = ({ src, fontTitle, lightTitle }: Props) => {
  return (
    <div className="flex max-lg:flex-col py-1 max-lg:text-sm justify-between items-center max-lg:px-2 px-8 my-4 gap-x-2 text-center">
      <div>
        <Image
          height={src.height}
          width={src.width}
          src={src.src}
          alt="shield"
        />
      </div>
      <div>
        <h5>{fontTitle}</h5>
        <span>{lightTitle}</span>
      </div>
    </div>
  );
};

export default ShopFeat;
