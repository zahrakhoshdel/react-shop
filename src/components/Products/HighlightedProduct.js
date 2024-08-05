import ProductDetailImage from "./ProductDetailImage";
import ProductDetailContent from "./ProductDetailContent";

import classes from "./HighlightedProduct.module.css";

const HighlightedProduct = (props) => {
  return (
    <div className={classes["container-fluid"]}>
      <div className={classes.container}>
        <div className={classes.row}>
          <ProductDetailImage image={props.data.image} />
          <ProductDetailContent item={props.data} />
        </div>
      </div>
    </div>
  );
};

export default HighlightedProduct;
