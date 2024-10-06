import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <h2>{data.title}</h2>
      <a href="">
        <img src={data.imageLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
