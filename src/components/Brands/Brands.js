import classes from "./Brands.module.css";

import apple from "../../assets/brands/apple-png-1.png";
import xiaomi from "../../assets/brands/Xiaomi-logo.png";
import haylou from "../../assets/brands/haylou-png-2.png";
import honor from "../../assets/brands/honor-png-1.png";
import huawei from "../../assets/brands/huawei-png-1.png";
import samsung from "../../assets/brands/samsung-png-1.png";

const Brands = () => {
  return (
    <div className={classes.container}>
      <div className={classes["card-brand"]}>
        <img src={apple} alt="icon-apple" />
      </div>
      <div className={classes["card-brand"]}>
        <img src={xiaomi} alt="icon-xiaomi" />
      </div>
      <div className={classes["card-brand"]}>
        <img src={haylou} alt="icon-haylou" />
      </div>
      <div className={classes["card-brand"]}>
        <img src={honor} alt="icon-honor" />
      </div>
      <div className={classes["card-brand"]}>
        <img src={huawei} alt="icon-huawei" />
      </div>
      <div className={classes["card-brand"]}>
        <img src={samsung} alt="icon-samsung" />
      </div>
    </div>
  );
};

export default Brands;
