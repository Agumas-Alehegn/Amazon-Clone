import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import classes from "./products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log("Error fetching products", err);
        }
      });
  }, []);
  console.log(products);
  return (
    <section className={`${classes.products_container}`}>
      {products.map((singleProduct) => (
        <ProductsCard key={singleProduct.id} product={singleProduct} />
      ))}
    </section>
  );
}

export default Products;
