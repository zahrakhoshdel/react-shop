import { productsData } from "../dummydata/productsData";

import AllProducts from "../components/Products/AllProducts";

const Products = () => {
  return <AllProducts productsData={productsData} />;
};

export default Products;
