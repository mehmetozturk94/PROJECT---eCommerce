import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import UserLogin from "./screens/LoginScreen";
import UserRegister from "./screens/RegisterScreen";
import UserProfile from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/shipping" element={<ShippingScreen />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="placeorder" element={<PlaceOrderScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
