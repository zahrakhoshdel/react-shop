import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/CardInfo/CardInfo";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <CardInfo />
      <div>2 تا بنر</div>
      <div>جدیدترین محصولات</div>
      <div>بنر تمام عرض</div>
      <div>نوشته ها</div>
    </Fragment>
  );
};

export default Home;
