import { ScProduct } from "./scParts";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import styled from "styled-components";

const StyledQtyButton = styled.button`
  border: none;
`;
const StyledQtyContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Product = (props) => {
  const { increaseQty, decreaseQty } = useContext(CartContext);
  const { removeItem } = useContext(ProductContext);

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>

          {props.cartItemQty === 0 ? (
            <button onClick={() => props.addItem(props.product)}>
              {" "}
              Add to cart
            </button>
          ) : (
            <StyledQtyContainer>
              <StyledQtyButton
                onClick={() => decreaseQty(props.product.id)}
                disabled={props.cartItemQty === 1}
              >
                -
              </StyledQtyButton>
              {props.cartItemQty}
              <StyledQtyButton onClick={() => increaseQty(props.product.id)}>
                +
              </StyledQtyButton>
              <StyledQtyButton onClick={() => removeItem(props.product.id)}>
                Remove Item
              </StyledQtyButton>
            </StyledQtyContainer>
          )}
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
