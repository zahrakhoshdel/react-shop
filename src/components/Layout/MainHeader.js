import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>لوگو</div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/">
            <li>خانه</li>
          </NavLink>
          <NavLink to="/products">
            <li>محصولات</li>
          </NavLink>
          <NavLink to="/contact-us">
            <li>تماس با ما</li>
          </NavLink>
        </ul>
      </nav>
      <div className={classes.shop}>
        <NavLink to="/basket">سبد</NavLink>
        <NavLink to="/profile">پروفایل</NavLink>
      </div>
    </header>
  );
};
export default MainHeader;
