import React from "react";
import { ScCartCheckout } from "./scParts";
import { useContext } from "react";
// Components
import Item from "./ShoppingCartItem";
import { CartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
        <button onClick={clearCart} disabled={cart.length > 0 ? false : true}>
          Clear Cart
        </button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
