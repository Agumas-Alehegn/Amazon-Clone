import React from "react";
import { Carousel } from "react-responsive-carousel";
import { backgroundImg } from "./data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./backgroundCarousel.module.css";
function BackgroundCarousel() {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
      >
        {backgroundImg.map((img) => {
          return <img src={img} alt="" />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default BackgroundCarousel;
