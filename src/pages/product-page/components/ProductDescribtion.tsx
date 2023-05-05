import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductDescribtion() {
  return (
    <article className="w-full md:w-[48%] lg:w-[33%] flex flex-col items-center justify-center ">
      <p className="text-gray-500 capitalize font-medium self-start py-3">
        smartphone
      </p>
      <h4 className="font-bold text-xl mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
        temporibus.
      </h4>
      <span className="w-full flex items-center justify-start text-xl text-orange-500 mb-3">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <p className="text-gray-500 ms-4">4.0 (Rate)</p>
      </span>
      <ul className="flex gap-2 flex-col list-disc text-gray-700 my-3">
        <li className="ms-6 leading-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            ratione! Enim rerum veritatis dolore eveniet eius hic dolorem at
            voluptas ipsam velit! Quo, illum cumque! Eius?
          </p>
        </li>
        <li className="ms-6 leading-4">
          <p>
            Obcaecati minus, nostrum dolor modi mollitia deserunt ipsa quidem
            deleniti voluptates explicabo eius ducimus corrupti itaque, hic quam
            officiis porro esse iure sequi distinctio, accusantium suscipit.
          </p>
        </li>
        <li className="ms-6 leading-4">
          <p>
            Pariatur, eaque dolorem ut, rerum tempore non quod, earum odio
            maxime cupiditate ipsam? Distinctio praesentium quibusdam ratione
            officiis optio veniam molestias voluptas hic, error, culpa
            molestiae!
          </p>
        </li>
      </ul>
      <span className="w-full flex gap-2 uppercase items-center justify-start my-3 text-lg">
        <b className="text-gray-500">SKU :</b>
        <b>290B7X56S</b>
      </span>
      <figure className="w-full flex items-start justify-center flex-col my-3 capitalize">
        <b className="mb-3">brand</b>
        {/* <img src="https://picsum.photos/150/50.webp" alt="brand-name" />
         */}
        <svg
          width="160"
          height="34"
          viewBox="0 0 160 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.27363V0H9.24779V6.27363H0ZM0 33.6917V9.15485H9.24779V33.6917H0Z"
            fill="#BAC4D1"
          />
          <path
            d="M43.2652 33.6917V22.1668C43.2652 20.7417 43.3116 19.2856 43.4046 17.7985C43.5285 16.2805 43.6524 15.0102 43.7763 13.9879C43.9003 12.9655 43.9777 12.3149 44.0087 12.0361H43.8228L37.921 33.6917H29.8814L23.9331 12.0825H23.7472C23.7782 12.3614 23.8556 13.012 23.9796 14.0343C24.1345 15.0257 24.2739 16.2805 24.3978 17.7985C24.5217 19.2856 24.5837 20.7417 24.5837 22.1668V33.6917H15.15V1.71944H29.6491L34.4821 20.1686H34.668L39.4545 1.71944H53.4424V33.6917H43.2652Z"
            fill="#BAC4D1"
          />
          <path
            d="M81.1084 33.6917L79.7607 29.184H68.5612L67.2135 33.6917H56.711L68.3753 1.71944H80.3184L91.9827 33.6917H81.1084ZM70.6988 22.0274H77.6231L74.2771 10.6419H74.0912L70.6988 22.0274Z"
            fill="#BAC4D1"
          />
          <path
            d="M109.703 1.71944C120.887 1.71944 126.479 7.04815 126.479 17.7056C126.479 28.363 120.887 33.6917 109.703 33.6917H95.8547V1.71944H109.703ZM106.125 26.0239H109.517C113.824 26.0239 115.977 23.7159 115.977 19.0997V16.3114C115.977 11.6953 113.824 9.38721 109.517 9.38721H106.125V26.0239Z"
            fill="#BAC4D1"
          />
          <path
            d="M132.024 1.71944H159.675V9.38721H142.294V13.802H157.165V21.1444H142.294V26.0239H160V33.6917H132.024V1.71944Z"
            fill="#BAC4D1"
          />
        </svg>
      </figure>
      <div className="w-full flex flex-col gap-2 capitalize my-3">
        <b className="mb-3">colors</b>
        <ul className="w-full flex items-center justify-start gap-4 flex-wrap">
          <li
            data-color="#e76f51"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#e76f51" }}
          ></li>
          <li
            data-color="#3a86ff"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#3a86ff" }}
          ></li>
          <li
            data-color="#e9e9e9"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#f1faee" }}
          ></li>
          <li
            data-color="#000000"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#000000" }}
          ></li>
          <li
            data-color="#2c6e49"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#2c6e49" }}
          ></li>
          <li
            data-color="#3a0ca3"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#3a0ca3" }}
          ></li>
          <li
            data-color="#9d0208"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#9d0208" }}
          ></li>
          <li
            data-color="#cfdbd5"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#cfdbd5" }}
          ></li>
          <li
            data-color="#efff08"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#efff08" }}
          ></li>
          <li
            data-color="#130177"
            className="block w-6 h-6 rounded-md shadow-2xl"
            style={{ backgroundColor: "#130177" }}
          ></li>
        </ul>
      </div>
    </article>
  );
}

export default ProductDescribtion;
