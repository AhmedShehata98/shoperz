import React from "react";

type Props = {
  productData?: Partial<Products>;
};
export default function OrderProductItem({ productData }: Props) {
  const { thumbnail, images, name, price, _id, category_id } =
    productData as Products;

  const getImgURL = (link: any) => {
    if (typeof link === "string") {
      return link;
    } else {
      return (link as any)?.url;
    }
  };
  return (
    <li className="p-3 bg-white flex flex-col gap-2 shadow-md border">
      <small className="uppercase font-bold text-stone-600 py-2">
        {category_id?.name}
      </small>
      <figure className="w-52 overflow-hidden m-auto">
        <img
          src={thumbnail ? getImgURL(thumbnail) : getImgURL(images?.at(0))}
          alt="product-img"
          className="max-w-full overflow-hidden object-cover object-top"
        />
      </figure>
      <div className="flex flex-col gap-1 mt-3">
        <p className="inline-block leading-4 h-8 text-Primary-700 overflow-hidden">
          {name}
        </p>
        <code>
          {price?.toLocaleString("en-ar", {
            style: "currency",
            currency: "egp",
          })}
        </code>
      </div>
    </li>
  );
}
