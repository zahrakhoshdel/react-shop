import classes from "./LineShape.module.css";

import lineSahpe from "../../assets/line-shape.svg";

const LineShape = (props) => {
  console.log(props.className);
  return (
    <div className={classes.shape}>
      <img
        src={lineSahpe}
        alt="line-shape"
        className={`${props.className ? props.className : classes["shape-color"]}`}
      />
    </div>
  );
};

export default LineShape;
