import classes from "./Counter.module.css";
import addIcon from "../../assets/icon-add.svg";
import deleteIcon from "../../assets/icon-delete.svg";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      <button onClick={props.onAddClick}>
        <img src={addIcon} alt="add-icon" />
      </button>
      <div className={classes.number}>
        <p>{props.count}</p>
      </div>
      <button onClick={props.onDeleteClick}>
        <img src={deleteIcon} alt="remove-icon" />
      </button>
    </div>
  );
};

export default Counter;
