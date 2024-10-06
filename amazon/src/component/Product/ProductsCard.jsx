import React from "react";
import Rating from "@mui/material/rating";
import FormatCurrency from "../CurrencyFormat/FormatCurrency.jsx";
import classes from "./products.module.css";

function ProductsCard({ product }) {
  const { title, id, price, image, rating } = product;
  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
      </div>
      <div className={`${classes.rating}`}>
        <Rating value={rating.rate} precision={0.1} />
        <small>{rating.count}</small>
      </div>
      <div>
        <div>
          <FormatCurrency amount={price} />
        </div>
      </div>
      <button className={`${classes.button}`}>Add to Cart</button>
    </div>
  );
}
export default ProductsCard;
