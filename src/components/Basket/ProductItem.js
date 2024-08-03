import { useDispatch } from "react-redux";

import Counter from "../UI/Counter";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, image, brand, quantity, total, price } = props.item;
console.log(props.item);
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        image,
        brand,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className={classes.item}>
      <div className={classes.row}>
        <div className={classes.image}>
          <img src={image} alt="watch-image" />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>{name}</div>
          <span>{price} تومان</span>
        </div>
      </div>
      <div className={classes["total-price"]}>
        <div className={classes.wrapper}>
          <div className={classes.price}>
            <span>{total}</span>
            <p>تومان</p>
          </div>
          <Counter
            count={quantity}
            onAddClick={addItemHandler}
            onDeleteClick={removeItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
