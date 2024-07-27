import classes from "./ProductDetailImage.module.css";

import watchImage from "../../assets/products/small_product-TLP-20666.png";

const ProductDetailImage = () => {
  return (
    <div className={classes["product-image"]}>
      <img src={watchImage} alt="watch-image" className={classes.image} />
    </div>
  );
};

export default ProductDetailImage;
