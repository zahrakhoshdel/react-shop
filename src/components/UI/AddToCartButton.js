import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  return (
    <button
      onClick={props.change ? null : props.onClick}
      className={`${classes.button} ${
        props.change ? classes.inactive : classes.active
      } ${props.className ? props.className : ""}`}
    >
      {props.change ? "به سبد افزوده شد" : "افزودن به سبد خرید"}
    </button>
  );
};

export default AddToCartButton;
