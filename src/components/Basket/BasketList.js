import ProductItem from "./ProductItem";
import classes from "./BasketList.module.css";

const BasketList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.list}>
          <div className={classes.heading}>
            <p>سبد خرید شما</p>
            <span>5 عدد کالا</span>
          </div>
          <ProductItem/>
        </div>
        <div className={classes.sidebar}>totalPrice</div>
      </div>
    </div>
  );
};

export default BasketList;
