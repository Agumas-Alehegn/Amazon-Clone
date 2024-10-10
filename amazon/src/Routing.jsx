import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/Pages/Landing/Landing";
import SignIn from "./component/Pages/Auth/SignIn";
import Payment from "./component/Pages/Payment/Payment";
import Order from "./component/Pages/Orders/Order";
import Cart from "./component/Pages/Cart/Cart";
import Results from "./component/Pages/Results/Results";
import ProductDetail from "./component/Pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />

        {/* <Route path="*" element={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default Routing;
