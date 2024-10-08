import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import AddToCartButton from "../UI/AddToCartButton";

import classes from "./ProductCart.module.css";

const ProductCart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const { id, name, image, brand, price } = props.item;

  const existingProduct = cartItems.find((product) => product.id === id);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        brand,
      })
    );
  };

  return (
    <div className={classes["card-container"]}>
      <Link className={classes["card-content"]} to={`/products/${id}`}>
        <div className={classes["card-image"]}>
          <img src={image} className={classes["card-img"]} alt={name} />
        </div>
        <h3 className={classes["card-name"]}>{name}</h3>
        <p className={classes["card-price"]}>{`${price} تومان`}</p>
      </Link>

      <div className={classes["card-button"]}>
        <AddToCartButton
          className={classes.button}
          onClick={addToCartHandler}
          change={existingProduct}
        />
      </div>
    </div>
  );
};

export default ProductCart;
