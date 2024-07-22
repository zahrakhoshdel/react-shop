import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/CardInfo/CardInfo";
import CartSlider from "../components/Products/CartSlider";
import Banners from "../components/Banners/Banners";
import Brands from "../components/Brands/Brands";
import BannerImage from "../components/Banners/BannerImage";

import supportBanner from "../assets/support-banner.png";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <CardInfo />
      <h3>جدیدترین محصولات</h3>
      <CartSlider />
      <Banners />
      <Brands />
      <BannerImage image={supportBanner} />
    </Fragment>
  );
};

export default Home;
