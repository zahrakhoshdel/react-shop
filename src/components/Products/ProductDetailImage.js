import classes from "./ProductDetailImage.module.css";

const ProductDetailImage = ({ image }) => {
  return (
    <div className={classes["product-image"]}>
      <img src={image} alt="watch-image" className={classes.image} />
    </div>
  );
};

export default ProductDetailImage;
