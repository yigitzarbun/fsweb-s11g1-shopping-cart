import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [cart, setCart] = useState(getInitialState());

  const increaseQty = (id) => {
    let copyCart = [...cart];
    let selectedItem = copyCart.filter((item) => item.id === id)[0];
    selectedItem.quantity += 1;
    setCart([...copyCart]);
  };

  const decreaseQty = (id) => {
    let copyCart = [...cart];
    let selectedItem = copyCart.filter((item) => item.id === id)[0];
    selectedItem.quantity -= 1;
    setCart([...copyCart]);
  };

  function getInitialState() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  function cartProvider() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateOrderQty = () => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
      result += cart[i].quantity;
    }
    return result;
  };

  const addItem = (item) => {
    let newItem = { ...item };
    setCart([...cart, newItem]);
    toast("Item was added to cart!");
  };

  const removeItem = (id) => {
    let copyCart = [...cart];
    let selectedItem = copyCart.map((item) => item.id === id)[0];
    let index = copyCart.indexOf(selectedItem);
    copyCart.splice(index, 1);
    setCart(copyCart);
    toast("Item was removed from cart!");
  };

  const clearCart = () => {
    setCart([]);
    toast("Cart cleared");
  };

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const clearSearch = () => {
    setSearchItem("");
  };

  useEffect(() => {
    calculateOrderQty();
    cartProvider();
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addItem,
        removeItem,
        searchItem,
        handleSearch,
        clearSearch,
      }}
    >
      <ToastContainer />
      <CartContext.Provider
        value={{ cart, clearCart, increaseQty, decreaseQty, calculateOrderQty }}
      >
        <div className="App">
          <Navigation />
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
