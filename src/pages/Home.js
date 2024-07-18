import { Fragment } from "react";

import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <Fragment>
      <Carousel autoSlide={true} />
      <div>دسته بندی</div>
      <div>اطلاعات ثابت</div>
      <div>2 تا بنر</div>
      <div>جدیدترین محصولات</div>
      <div>بنر تمام عرض</div>
      <div>نوشته ها</div>
    </Fragment>
  );
};

export default Home;
