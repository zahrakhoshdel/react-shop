import { Fragment } from "react";

import LineShape from "./LineShape";
import FooterColumn from "./FooterColumn";

import classes from "./Footer.module.css";
import logo from "../../assets/brandlogo.png";
import instagram from "../../assets/socials/instagram.png";
import twitter from "../../assets/socials/twitter.png";
import linkedin from "../../assets/socials/linkedin.png";
import aparat from "../../assets/socials/aparat.png";

const Footer = () => {
  return (
    <Fragment>
      <LineShape />
      <div className={classes.container}>
        <FooterColumn>
          <div className={classes.logo}>
            <img src={logo} />
          </div>
        </FooterColumn>
        <FooterColumn>
          <div className={classes.links}>
            <div className={classes.heading}>
              <h3>دسترسی های سریع </h3>
            </div>
            <div className={classes["page-link"]}>
              <ul>
                <li>
                  <a href="/">صفحه اصلی</a>
                </li>
                <li>
                  <a href="/">محصولات</a>
                </li>
                <li>
                  <a href="/">تماس با ما</a>
                </li>
              </ul>
            </div>
          </div>
        </FooterColumn>
        <FooterColumn>
          <div className={classes.links}>
            <div className={classes.heading}>
              <h3>راه های ارتباطی</h3>
            </div>
            <div className={classes.socials}>
              <a href="/">
                <img src={instagram} />
              </a>
              <a href="/">
                <img src={twitter} />
              </a>
              <a href="/">
                <img src={linkedin} />
              </a>
              <a href="/">
                <img src={aparat} />
              </a>
            </div>
          </div>
        </FooterColumn>
      </div>
    </Fragment>
  );
};

export default Footer;
