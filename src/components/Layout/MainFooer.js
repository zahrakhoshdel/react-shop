import Footer from "../Footer/Footer";
import Copyright from "../Footer/Copyright";
import classes from "./MainFooer.module.css";

const MainFooer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes["footer-main"]}>
        <Footer />
      </section>
      <section className={classes.copyright}>
        <Copyright />
      </section>
    </footer>
  );
};

export default MainFooer;
