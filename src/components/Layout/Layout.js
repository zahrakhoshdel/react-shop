import { Fragment } from "react";

import MainHeader from "./MainHeader";
import MainFooer from "./MainFooer";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
      <MainFooer />
    </Fragment>
  );
};

export default Layout;
