export const isInCartMiddleware = (
  products: Products | Products[],
  shoppingCart: { _id: string }[] | []
) => {
  // loop over the products list
  // compare each product id with list of shopping cart id's
  // if equals id's return all products contains that id with extra property "isInCart" else return all without modify
  console.log("&".repeat(25));
  console.log(shoppingCart);
  console.log("&".repeat(25));
  if (Array.isArray(products)) {
    let newProduct = products.map((product) =>
      shoppingCart.some((item) => item?._id === product._id)
        ? { ...product, isInCart: true }
        : { ...product, isInCart: false }
    );
    return newProduct;
  } else {
    let isExist =
      shoppingCart.findIndex((item) => item._id === products._id) === -1
        ? false
        : true;
    if (isExist) {
      return { ...products, isInCart: true };
    } else {
      return { ...products, isInCart: false };
    }
  }
};
