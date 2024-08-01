import Counter from '../UI/Counter';

import classes from "./ProductItem.module.css";
import watchImage from "../../assets/products/small_product-TLP-20666.png";

const ProductItem = () => {
  return (
    <div className={classes.item}>
      <div className={classes.row}>
        <div className={classes.image}>
          <img src={watchImage} alt="watch-image" />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            ساعت هوشمند سامسونگ مدل Galaxy Watch 6 44mm
          </div>
          <span>2000000 تومان</span>
        </div>
      </div>
      <div className={classes["total-price"]}>
        <div className={classes.wrapper}>
          <div className={classes.price}>
            <span>8000000</span>
            <p>تومان</p>
          </div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
