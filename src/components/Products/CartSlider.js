import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { productsData } from "../../dummydata/productsData";
import Card from "../UI/Card";
import ProductCart from "./ProductCart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./CartSlider.module.css";

const CartSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let size = 7;

  return (
    <div className={classes["slide-container"]}>
      <div className={classes["slide-content"]}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSwiper={setSwiperRef}
          // pagination={{
          //   type: "fraction",
          // }}
          navigation={true}
          modules={[Navigation]}
        >
          {productsData.slice(0, size).map((product, index) => {
            return (
              <SwiperSlide key={product.id}>
                <Card className={classes["card-hov"]}>
                  <ProductCart
                    item={{
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      brand: product.brand,
                      price: product.price,
                    }}
                  />
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CartSlider;
