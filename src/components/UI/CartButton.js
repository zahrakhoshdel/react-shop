import classes from "./CartButton.module.css";
import shoppingCart from "../../assets/shopping-cart.png";

const CartButton = () => {
  return (
    <div className={classes.order}>
      <span>1</span>
      <img src={shoppingCart} alt="shopping-cart" />
      <p>سبد</p>
    </div>
  );
};

export default CartButton;
