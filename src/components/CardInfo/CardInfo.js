import { Fragment } from "react";
import { cardInfoData } from "../../dummydata/cardInfoData";

import classes from "./CardInfo.module.css";

const CardInfo = () => {
  return (
    <Fragment>
      <div className={classes["card-wrapper"]}>
        {cardInfoData.map((item, index) => {
          return (
            <div key={index} className={classes.container}>
              <div className={classes.icon}>
                <img src={item.icon} alt={`آیکن${item.title}`}/>
              </div>

              <div className={classes.info}>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default CardInfo;
