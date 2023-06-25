import Image from "next/image";
import React from "react";

type Props = {
  thumbnail: string;
  images: string[];
};

function ProductMedia({ images, thumbnail }: Props) {
  return (
    <article className="w-full md:w-[48%] lg:w-[30%] flex items-center justify-center gap-3">
      <div>
        <figure className="w-full min-h-full rounded-lg overflow-hidden m-0">
          <Image
            src={thumbnail}
            alt="product-preview-image.webp"
            width={300}
            height={365}
            className="grid w-full object-cover object-center cursor-pointer"
          />
        </figure>
        <ul className="grid grid-flow-col gap-2 my-3 overflow-y-auto max-w-full">
          {images.map((img) => (
            <li className="shadow-md rounded-lg overflow-hidden cursor-pointer border-2 hover:border-sky-500">
              <Image
                key={img}
                className="grid max-w-full object-cover object-center"
                src={img}
                width={70}
                height={70}
                alt="thumbnail-1.webp"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProductMedia;
