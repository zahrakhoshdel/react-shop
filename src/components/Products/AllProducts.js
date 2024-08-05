import { sortItems } from "../../dummydata/sortItems";

import Card from "../UI/Card";
import ProductCart from "./ProductCart";
import SidebarBrands from "./SidebarBrands";

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
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </div>

      <SidebarBrands />

      <div className={classes["product-list"]}>
        {allProducts.map((product, index) => {
          return (
            <Card key={product.id} className={classes.card}>
              <ProductCart
                item={{
                  id: product.id,
                  name: product.name,
                  image: product.image,
                  brand: product.brand,
                  price: product.price,
                }}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
