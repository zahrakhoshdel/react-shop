import classes from "./LineShape.module.css";

import lineSahpe from "../../assets/line-shape.svg";

const LineShape = () => {
  return (
    <div className={classes.shape}>
      <img src={lineSahpe} />
    </div>
  );
};

export default LineShape;
