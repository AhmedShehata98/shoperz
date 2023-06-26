import { selectAppState } from "@/redux/slices/app.slice";
import React from "react";
import { useSelector } from "react-redux";

function useInShoppingCart(_id: string): {
  isInCart: boolean;
  setIsInCart: React.Dispatch<React.SetStateAction<boolean>>;
} {
  const { shoppingCart } = useSelector(selectAppState);
  const [isInCart, setIsInCart] = React.useState<boolean>(false);
  const checkIfProductInCart = React.useCallback(() => {
    if (Array.isArray(shoppingCart) && shoppingCart.length >= 1) {
      const isExist =
        shoppingCart.findIndex((cartItem) => cartItem._id === _id) === -1
          ? false
          : true;

      setIsInCart(isExist);
    }
  }, [shoppingCart]);

  React.useEffect(() => {
    checkIfProductInCart();
  }, [checkIfProductInCart, _id]);

  return { isInCart, setIsInCart };
}

export default useInShoppingCart;
