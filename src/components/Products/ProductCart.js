import classes from "./ProductCart.module.css";

const ProductCart = ({ id, image, name, price }) => {
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
        <button className={classes.button}>افزودن به سبد</button>
      </div>
    </div>
  );
};

export default ProductCart;
