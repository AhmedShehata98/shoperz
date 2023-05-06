import React from "react";

function ProductMedia() {
  return (
    <article className="w-full md:w-[48%] lg:w-[30%] flex items-center justify-center gap-3">
      <div>
        <figure className="w-full rounded-lg overflow-hidden m-0">
          <img
            src="https://picsum.photos/450/550.webp"
            alt="product-preview-image.webp"
            className="grid w-full object-cover object-center cursor-pointer"
          />
        </figure>
        <ul className="grid grid-flow-col gap-2 my-3 overflow-y-auto max-w-full">
          <li className="shadow-md rounded-lg overflow-hidden cursor-pointer border-2 hover:border-sky-500">
            <img
              className="grid max-w-full object-cover object-center"
              src="https://picsum.photos/150/145.webp"
              alt="thumbnail-1.webp"
            />
          </li>
          <li className="shadow-md rounded-lg overflow-hidden cursor-pointer border-2 hover:border-sky-500">
            <img
              className="grid max-w-full object-cover object-center"
              src="https://picsum.photos/150/146.webp"
              alt="thumbnail-2.webp"
            />
          </li>
          <li className="shadow-md rounded-lg overflow-hidden cursor-pointer border-2 hover:border-sky-500">
            <img
              className="grid max-w-full object-cover object-center"
              src="https://picsum.photos/150/147.webp"
              alt="thumbnail-3.webp"
            />
          </li>
          <li className="shadow-md rounded-lg overflow-hidden cursor-pointer border-2 hover:border-sky-500">
            <img
              className="grid max-w-full object-cover object-center"
              src="https://picsum.photos/150/148.webp"
              alt="thumbnail-4.webp"
            />
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProductMedia;
