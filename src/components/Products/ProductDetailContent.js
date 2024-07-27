import classes from "./ProductDetailContent.module.css";

const ProductDetailContent = () => {
  return (
    <div className={classes["product-content"]}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>ساعت هوشمند سامسونگ مدل Galaxy Watch 6 44mm</h2>
        </div>
        <div className={classes.description}>
          <div className={classes.warranty}>
            <span>نوع گارانتی:</span>
            <p>گارانتی اصلی</p>
          </div>
          <div className={classes.order}>
            <div className={classes.row}>
              <span>تعداد:</span>
              <div className={classes.counter}>
                <i>+</i>
                <span className={classes.number}>1</span>
                <i>-</i>
              </div>
            </div>
            <div className={classes.price}>
              <span>قیمت:</span>
              <p>2000000 تومان</p>
            </div>
          </div>
        </div>
        <button>افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default ProductDetailContent;
