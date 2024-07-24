import LineShape from "./LineShape";

import classes from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={classes.container}>
      <LineShape className={classes["shape-color"]} />
      <div className={classes.copy}>
        <div className={classes.wrap}>
          <p>&copy; made by ❤️ Zahra Khoshdel</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
