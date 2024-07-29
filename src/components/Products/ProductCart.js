import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import AddToCartButton from "../UI/AddToCartButton";

import classes from "./ProductCart.module.css";

const ProductCart = ({ id, image, name, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
      })
    );
  };

  return (
    <div className={classes["card-container"]}>
      <div className={classes["image-content"]}>
        <div className={classes["card-image"]}>
          <img src={image} className={classes["card-img"]} alt={name} />
        </div>
      </div>

      <div className={classes["card-content"]}>
        <h3 className={classes["card-name"]}>{name}</h3>
        <p className={classes["card-price"]}>{`${price} تومان`}</p>
        <AddToCartButton
          className={classes.button}
          onClick={addToCartHandler}
        />
      </div>
    </div>
  );
};

export default ProductCart;
