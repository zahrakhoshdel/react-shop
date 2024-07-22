import BannerImage from "./BannerImage";

import classes from "./Banners.module.css";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

const Banners = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <BannerImage image={banner1} className={classes.banner} />
        <BannerImage image={banner2} className={classes.banner} />
      </div>
    </div>
  );
};

export default Banners;
