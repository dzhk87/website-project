export const addItemToCart = (cart, item) => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id)

  if (existingItem) {
    return cart.map(cartItem => (
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity++ }
        : cartItem
    ))
  }

  return [ ...cart, { ...item, quantity: 1 } ]
}