import { atom, selector } from 'recoil';
export const cart = atom({
    key: 'cart', // unique ID (with respect to other atoms/selectors)
    default: []
});

export const addToCart = (cart, product) => {
    const newCart = [...cart];
    const foundIndex = cart.findIndex(x => x.id === product.id);
      //Trả về 1 con số (index của item được thêm vào)
    if (foundIndex >= 0) {
      newCart[foundIndex] = {
        ...cart[foundIndex],
        quantity: cart[foundIndex].quantity + 1,
      };
      return newCart;
    }
    // Add new item
    newCart.push({
      id: product.id,
      product,
      quantity: 1,
    });
    return newCart;
  }