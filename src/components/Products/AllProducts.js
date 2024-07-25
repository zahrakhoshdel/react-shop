import { sortItems } from "../../dummydata/sortItems";

import classes from "./AllProducts.module.css";
import SidebarBrands from "./SidebarBrands";

const AllProducts = (props) => {
  const allProducts = props.productsData;

  return (
    <div className={classes.container}>
      <div className={classes.sort}>
        <div className={classes["sort-wrapper"]}>
          <p>مرتب سازی براساس:</p>
          <div className={classes["sort-items"]}>
            {sortItems.map((item, index) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
      <SidebarBrands />

      <div className={classes["product-list"]}>
        {allProducts.map((product, index) => {
          return <p>{product.name}</p>;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
