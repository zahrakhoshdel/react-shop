import ProductItem from "./ProductItem";
import OrderSummary from "./OrderSummary";
import classes from "./BasketList.module.css";

const BasketList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>سبد خرید شما</p>
        <span>5 عدد کالا</span>
      </div>
      <div className={classes.list}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <OrderSummary />
    </div>
  );
};

export default BasketList;
