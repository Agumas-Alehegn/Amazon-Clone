import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductsCard from "../../Product/ProductsCard.jsx";
import Loading from "../../Loader/Loading.jsx";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  console.log(productId);
  // This will print the productId received from the URL;
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <LayOut>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </LayOut>
  );
}

export default ProductDetail;
