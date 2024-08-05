import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import AddToCartButton from "../UI/AddToCartButton";
import Counter from "../UI/Counter";

import classes from "./ProductDetailContent.module.css";

const ProductDetailContent = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let quantity = 0;

  const { id, name, image, brand, price } = props.item;
  const existingProduct = cartItems.find((product) => product.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity;
  }

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
    <div className={classes["product-content"]}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>{name}</h2>
          <p>برند {brand}</p>
        </div>
        <div className={classes.description}>
          <div className={classes.warranty}>
            <span>نوع گارانتی:</span>
            <p>گارانتی اصلی</p>
          </div>
          <div className={classes.order}>
            <div className={classes.row}>
              <span>تعداد:</span>
              <Counter
                count={quantity}
                onAddClick={addItemHandler}
                onDeleteClick={removeItemHandler}
              />
            </div>
            <div className={classes.price}>
              <span>قیمت:</span>
              <p>{price} تومان</p>
            </div>
          </div>
        </div>
        <AddToCartButton
          className={classes.button}
          onClick={addToCartHandler}
        />
      </div>
    </div>
  );
};

export default ProductDetailContent;
