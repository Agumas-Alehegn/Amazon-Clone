import React from "react";
import Rating from "@mui/material/Rating";
import FormatCurrency from "../CurrencyFormat/FormatCurrency.jsx";
import classes from "./products.module.css";
import { Link } from "react-router-dom";
function ProductsCard({ product }) {
  const { id, title, price, image, rating } = product;
  return (
    <div className={`${classes.card_container}`}>
      <Link to={`products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
      </div>
      <div className={`${classes.rating}`}>
        <Rating value={rating?.rate} precision={0.1} />
        <small>{rating?.count}</small>
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
