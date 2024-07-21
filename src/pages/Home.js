import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/CardInfo/CardInfo";
import CartSlider from "../components/Products/CartSlider";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <CardInfo />
      <h3>جدیدترین محصولات</h3>
      <CartSlider />
      <Banner />
      <Brands />
    </Fragment>
  );
};

export default Home;
