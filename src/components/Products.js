import React from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
// Components
import Product from "./Product";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin: 1rem 0;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
`;

const StyledSearchBar = styled.input`
  padding: 0.5rem;
  border: 1px solid lightcoral;
  border-radius: 3px;
`;
const Products = () => {
  const { products, addItem, searchItem, handleSearch, clearSearch } =
    useContext(ProductContext);

  return (
    <div>
      <StyledSearchContainer>
        <label htmlFor="search">
          <StyledSearchBar
            type="text"
            id="search"
            name="search"
            value={searchItem}
            onChange={handleSearch}
          />
        </label>
        <StyledButton onClick={clearSearch}>Clear</StyledButton>
      </StyledSearchContainer>
      <ScProducts>
        {products
          .filter((item) => {
            if (item.title === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return item;
            }
          })
          .map((product) => (
            <Product key={product.id} product={product} addItem={addItem} />
          ))}
      </ScProducts>
    </div>
  );
};

export default Products;
