import classes from "./Counter.module.css";
import addIcon from "../../assets/icon-add.svg";
import deleteIcon from "../../assets/icon-delete.svg";

const Counter = () => {
  return (
    <div className={classes.counter}>
      <button>
        <img src={addIcon} alt="add-icon"/>
      </button>
      <div className={classes.number}>
        <p>4</p>
      </div>
      <button>
        <img src={deleteIcon} alt="delete-icon"/>
      </button>
    </div>
  );
};

export default Counter;
