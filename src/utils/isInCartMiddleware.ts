export const isInCartMiddleware = (
  products: Products[],
  shoppingCart: { _id: string }[] | []
) => {
  // loop over the products list
  // compare each product id with list of shopping cart id's
  // if equals id's return all products contains that id with extra property "isInCart" else return all without modify

  let newProduct = products.map((product) =>
    shoppingCart.some((item) => item?._id === product._id)
      ? { ...product, isInCart: true }
      : { ...product, isInCart: false }
  );
  return newProduct;
};
