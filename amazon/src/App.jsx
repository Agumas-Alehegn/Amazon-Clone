import React from "react";
import "./index.css";
import Header from "./component/Header/Header.jsx";
import BackgroundCarousel from "./component/Carousel/BackgroundCarousel.jsx";
import Category from "./component/Category/Category.jsx";
import Products from "./component/Product/Products.jsx";

function App() {
  return (
    <>
      <Header />
      <BackgroundCarousel />
      <Category />
      <Products />
    </>
  );
}
export default App;
