import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>لوگو</div>
      <nav className={classes.nav}>
        <ul>
          <a href="/">
            <li>خانه</li>
          </a>
          <a href="/">
            <li>محصولات</li>
          </a>
          <a href="/">
            <li>تماس با ما</li>
          </a>
        </ul>
      </nav>
      <div className={classes.shop}>
        <a href="/">سبد</a>
        <a href="/">پروفایل</a>
      </div>
    </header>
  );
};
export default MainHeader;
