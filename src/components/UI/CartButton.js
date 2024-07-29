import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import shoppingCart from "../../assets/shopping-cart.png";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={classes.order}>
      <span>{cartQuantity}</span>
      <img src={shoppingCart} alt="shopping-cart" />
      <p>سبد</p>
    </div>
  );
};

export default CartButton;
