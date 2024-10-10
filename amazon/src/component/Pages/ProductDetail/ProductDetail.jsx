import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductsCard from "../../Product/ProductsCard.jsx";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  console.log(productId);
  // This will print the productId received from the URL;
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(product);
  return (
    <LayOut>
      <div className={classes.details_wrap}>
        <ProductsCard product={product} />

        <div style={{ marginBottom: "50px " }}>
          <h2>Product Details</h2>
          <h3>{product.title}</h3>
          <p>
            <strong>Category: </strong>
            {product.category}
          </p>
          <p>
            <strong>Description: </strong>
            {product.description}
          </p>
        </div>
      </div>
    </LayOut>
  );
}

export default ProductDetail;
