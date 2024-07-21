import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/CardInfo/CardInfo";
import CartSlider from "../components/Products/CartSlider";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <CardInfo />
      <h3>جدیدترین محصولات</h3>
      <CartSlider />
      <Banner />
    </Fragment>
  );
};

export default Home;
