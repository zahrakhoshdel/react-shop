import classes from "./FooterColumn.module.css";

const FooterColumn = (props) => {
  return (
    <div className={classes.column}>
      <div className={classes.wrapper}>{props.children}</div>
    </div>
  );
};

export default FooterColumn;
