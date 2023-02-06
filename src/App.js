import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(getInitialState());

  function getInitialState() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  function cartProvider() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    cartProvider();
  }, [cart]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    let copyCart = [...cart];
    let selectedItem = copyCart.map((item) => item.id === id)[0];
    let index = copyCart.indexOf(selectedItem);
    copyCart.splice(index, 1);
    setCart(copyCart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      <CartContext.Provider value={cart}>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
