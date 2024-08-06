import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import OrderSummary from "./OrderSummary";
import classes from "./BasketList.module.css";

const BasketList = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>سبد خرید شما</p>
        <span>{cartQuantity} عدد کالا</span>
      </div>
      <div className={classes.list}>
        {cartQuantity > 0 ? (
          cartItems.map((item) => (
            <ProductItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                image: item.image,
                brand: item.brand,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))
        ) : (
          <p>سبد خرید شما خالی است!</p>
        )}
      </div>
      <OrderSummary />
    </div>
  );
};

export default BasketList;
