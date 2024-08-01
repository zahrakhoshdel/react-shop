import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes["order-summary"]}>
        <div className={classes["order-item"]}>
          <span>مبلغ کل:</span>
          <span>2700000</span>
        </div>
        <div className={classes["order-item"]}>
          <span>هزینه ارسال:</span>
          <span>وابسته به آدرس</span>
        </div>
        <div className={classes["order-final"]}>
          <div>قابل پرداخت:</div>
          <span>2700000</span>
        </div>
        <div className={classes["order-btn"]}>
          <button>ادامه ثبت سفارش</button>
        </div>
      </div>
      <div className={classes["order-message"]}>
        <p>
          کالاهای موجود در سبد خرید شما ثبت و رزرو نشده اند، برای ثبت سفارش
          مراحل بعدی را تکمیل کنید.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
