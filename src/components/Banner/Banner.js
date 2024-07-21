import classes from "./Banner.module.css";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.banner}>
          <a href="/">
            <img src={banner1} alt="banner1" />
          </a>
        </div>
        <div className={classes.banner}>
          <a href="/">
            <img src={banner2} alt="banner2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
