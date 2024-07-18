import { useState, useEffect } from "react";
import { caroselData } from "../../dummydata/carouselData";

import CircleButton from "../UI/CircleButton";
import classes from "./Carousel.module.css";
import arrowLeft from "../../assets/left-arrow.svg";
import arrowRight from "../../assets/right-arrow.svg";

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === caroselData.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? caroselData.length - 1 : slide - 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.carousel}>
        <div className={classes["arrow-right"]} onClick={prevSlide}>
          <CircleButton icon={arrowRight} iconAlt={"arrow-right"} />
        </div>

        {caroselData.map((item, index) => {
          return (
            <img
              src={item.url}
              alt={item.alt}
              key={index}
              className={`${classes.slide} ${
                slide === index ? "" : classes.hidden
              }`}
            />
          );
        })}

        <div className={classes["arrow-left"]} onClick={nextSlide}>
          <CircleButton icon={arrowLeft} iconAlt={"arrow-left"} />
        </div>

        <span className={classes.indicators}>
          {caroselData.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={`${classes.indicator} ${
                  slide === index ? "" : classes.inactive
                }`}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
