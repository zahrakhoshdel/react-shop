import { NavLink } from "react-router-dom";

import logo from "../../assets/brandlogo.png";

import classes from "./MainHeader.module.css";
import CartButton from "../UI/CartButton";

const MainHeader = () => {
  const setActive = ({ isActive }) => (isActive ? classes.active : "");

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/" className={setActive}>
            <li>خانه</li>
          </NavLink>
          <NavLink to="/products" className={setActive}>
            <li>محصولات</li>
          </NavLink>
          <NavLink to="/contact-us" className={setActive}>
            <li>تماس با ما</li>
          </NavLink>
        </ul>
      </nav>
      <div className={classes.shop}>
        <div className={classes.row}>
          <NavLink to="/basket">
            <CartButton />
          </NavLink>
          <NavLink to="/profile">پروفایل</NavLink>
        </div>
      </div>
    </header>
  );
};
export default MainHeader;
