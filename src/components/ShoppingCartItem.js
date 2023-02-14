import React, { useState } from "react";
import {
  ScCartItem,
  ScCartItemDetails,
  ScCartItemQtyButtons,
  ScCartItemQtyButtonsContainer,
} from "./scParts";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const Item = (props) => {
  const { removeItem } = useContext(ProductContext);
  const { increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />
      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
        <ScCartItemQtyButtonsContainer>
          <ScCartItemQtyButtons
            disabled={props.quantity === 1}
            hidden={props.quantity === 0}
            onClick={() => decreaseQty(props.id)}
          >
            -
          </ScCartItemQtyButtons>
          <p style={{ padding: "0" }}>{props.quantity}</p>
          <ScCartItemQtyButtons onClick={() => increaseQty(props.id)}>
            +
          </ScCartItemQtyButtons>
        </ScCartItemQtyButtonsContainer>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
