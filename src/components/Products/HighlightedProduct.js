import ProductDetailImage from "./ProductDetailImage";
import ProductDetailContent from "./ProductDetailContent";

import classes from "./HighlightedProduct.module.css";

const HighlightedProduct = () => {
  return (
    <div className={classes["container-fluid"]}>
      <div className={classes.container}>
        <div className={classes.row}>
          <ProductDetailImage />
          <ProductDetailContent />
        </div>
      </div>
    </div>
  );
};

export default HighlightedProduct;
