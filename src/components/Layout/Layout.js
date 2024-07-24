import MainHeader from "./MainHeader";
import MainFooer from "./MainFooer";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
      <MainFooer />
    </div>
  );
};

export default Layout;
