import {brandsData} from '../../dummydata/brandsData';

import classes from "./SidebarBrands.module.css";

const SidebarBrands = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes["brands-heading"]}>
        <p>برندها</p>
      </div>
      <div>
        <ul>
          {brandsData.map((brand, index) => {
            return (
              <li key={index}>
                <p>{brand}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarBrands;
