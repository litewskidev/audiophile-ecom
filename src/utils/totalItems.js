export const totalItems = cart => {
  let totalCart = 0;
  cart.map(item => totalCart += (item.quantity));
  return totalCart;
};
