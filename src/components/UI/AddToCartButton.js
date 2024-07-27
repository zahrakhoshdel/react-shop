import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ""}`}
    >
      افزودن به سبد خرید
    </button>
  );
};

export default AddToCartButton;
