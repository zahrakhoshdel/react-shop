import { sortItems } from "../../dummydata/sortItems";

import classes from "./AllProducts.module.css";

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
      <div className={classes.sidebar}>برندها</div>

      <div className={classes["product-list"]}>
        {allProducts.map((product, index) => {
          return <p>{product.name}</p>;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
