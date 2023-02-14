import React from "react";
import { ScCartCheckout } from "./scParts";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Item from "./ShoppingCartItem";
import { CartContext } from "../contexts/CartContext";
const StyledEmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  width: 20%;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 850px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 50%;
  }
`;

const ShoppingCart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price * value.quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <StyledEmptyCartContainer>
          <p>Shopping cart is empty</p>
          <Link to="/">
            <button>View Products</button>
          </Link>
        </StyledEmptyCartContainer>
      )}

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
