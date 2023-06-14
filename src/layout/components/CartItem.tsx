import { useRemoveFromCartMutation } from "@/services/shoperzApi.service";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  product: Products;
  quantity: number;
};
function CartItem({ product, quantity }: Props) {
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const [fetchRemoveCartItem, responseCart] = useRemoveFromCartMutation();

  React.useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
    } else {
      setToken(undefined);
    }
  }, []);
  return (
    <li
      key={product._id}
      className="flex gap-3 items-center justify-between p-3 rounded-md hover:bg-gray-100"
    >
      <figure className="w-16 rounded-md">
        <img
          src={product.thumbnail}
          alt="cart-item-image"
          className="w-full object-cover object-center"
        />
      </figure>
      <div className="w-2/3 flex flex-col items-start justify-start gap-1">
        <p className="text-sky-700 font-semibold capitalize m-0">
          {product?.name}
        </p>
        <span className="flex items-center justify-center gap-4">
          <small className="text-gray-500">{quantity}X</small>
          <span className="flex items-center justify-center gap-1 text-gray-500">
            <small className="font-mono ">
              {Intl.NumberFormat("en-eg", {
                style: "currency",
                currency: "EGP",
              }).format(product.price)}
            </small>
          </span>
        </span>
      </div>
      <span className="w-16 flex flex-col items-start justify-center gap-1">
        <button
          className="text-2xl text-red-200 hover:text-red-600"
          onClick={() =>
            fetchRemoveCartItem({
              productId: product?._id,
              token,
            })
          }
        >
          <AiOutlineCloseCircle />
        </button>
        <span className="flex items-center justify-center gap-1">
          <small className="font-mono ">
            {Intl.NumberFormat("en-eg", {
              style: "currency",
              currency: "EGP",
            }).format(product.price * quantity)}
          </small>
        </span>
      </span>
    </li>
  );
}

export default CartItem;
