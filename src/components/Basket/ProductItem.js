import Counter from "../UI/Counter";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, image, quantity, total, price } = props.item;

  return (
    <div className={classes.item}>
      <div className={classes.row}>
        <div className={classes.image}>
          <img src={image} alt="watch-image" />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>{title}</div>
          <span>{price} تومان</span>
        </div>
      </div>
      <div className={classes["total-price"]}>
        <div className={classes.wrapper}>
          <div className={classes.price}>
            <span>{total}</span>
            <p>تومان</p>
          </div>
          <Counter count={quantity} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
