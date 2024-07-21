import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/CardInfo/CardInfo";
import CartSlider from "../components/Products/CartSlider";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <CardInfo />
      <h3>جدیدترین محصولات</h3>
      <CartSlider />
      <div>بنر تمام عرض</div>
      <div>نوشته ها</div>
    </Fragment>
  );
};

export default Home;
