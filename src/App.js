import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Home/>} />} /> 
          <Route path="/products" element={<Layout children={<Products/>} />} /> 
          <Route path="/cart" element={<Layout children={<CartPage/>} />} /> 
          <Route path="/product/:id" element={<Layout children={<Product />} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
