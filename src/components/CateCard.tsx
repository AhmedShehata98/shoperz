import React from "react";
import card1 from "../assets/Categories Card/03 2.png";
import Image, { StaticImageData } from "next/image";
type Props = {
  //   cate: string;
  //   src: StaticImageData & string;
};

const CateCard = (props: Props) => {
  return (
    <div className="p-4 group rounded-md relative bg-white grid text-center justify-center items-center">
      <h5 className="p-2">TV & Audio</h5>
      <div>
        <Image
          className="group-hover:scale-110 transition-all duration-300"
          src={card1}
          alt="TV & Audio"
        />
      </div>
      <button className="p-2 absolute bottom-4 right-4 group-hover:bg-Primary-600 transition-all duration-300 bg-slate-200 rounded-full w-fit">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0234 7.52813C14.2839 7.78871 14.2839 8.21066 14.0234 8.47092L10.2526 12.2422C9.99219 12.5025 9.57031 12.5027 9.3099 12.2422C9.04818 11.9817 9.04948 11.5597 9.3099 11.2994L11.9427 8.66623H2.44792C2.07943 8.66623 1.78125 8.36773 1.78125 7.99956C1.78125 7.6314 2.07943 7.3329 2.44792 7.3329L11.9427 7.3329L9.3099 4.69976C9.04818 4.43918 9.04948 4.01722 9.3099 3.75689C9.57031 3.49655 9.99219 3.49631 10.2526 3.75689L14.0234 7.52813Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default CateCard;
