import styled from "styled-components";

export const ScNav = styled.nav`
  margin-bottom: 3rem;
  background: #141618;

  nav {
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 30px 20px;
  }

  a span {
    display: inline-block;
    position: relative;
    top: -8px;
    left: 0px;
    font-weight: bold;
    line-height: 18px;
    text-align: center;
    background: lightcoral;
    border-radius: 100%;
    width: 18px;
    height: 18px;
  }
`;

export const ScProduct = styled.div`
  transition: 0.2s ease-in-out;
  background-color: #fff;
  display: flex;
  align-items: flex-end;

  &:hover {
    box-shadow: 0px 5px 37px -22px rgba(0, 0, 0, 1);
  }

  .details {
    padding: 1.5rem;
    line-height: 1.5;
    flex: 1;
  }

  .title {
    font-weight: 400;
    font-size: 1.25rem;
  }

  .footer {
    display: flex;
    align-items: center;
    padding: 1.25rem 0 0.25rem;
    justify-content: space-between;
  }

  img {
    width: 35%;
    display: block;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    img {
      width: 100%;
    }
  }
`;

export const ScCartItem = styled.div`
  background: white;
  display: flex;
  margin-bottom: 1rem;
  img {
    width: 100px;
  }
`;

export const ScCartItemDetails = styled.div`
  flex: 1;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  h2 {
    font-size: 1.25rem;
    flex: 1;
  }
  p {
    padding-right: 1rem;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h2 {
      flex: 0 0 100%;
      font-size: 1rem;
    }
  }
`;

export const ScCartItemQtyButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

export const ScCartItemQtyButtons = styled.button`
  border: none;
`;

export const ScCartCheckout = styled.div`
  margin: 30px 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #141618;
  color: white;

  button {
    border-color: white;
    color: white;
  }

  button:hover {
    background: white;
    color: black;
  }
`;
