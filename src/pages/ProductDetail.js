import { useParams } from "react-router-dom";
import { productsData } from "../dummydata/productsData";

import HighlightedProduct from "../components/Products/HighlightedProduct";

const ProductDetail = () => {
  const params = useParams();

  const { productId } = params;

  const selectProduct = productsData.find(
    (product) => product.id === productId
  );

  return <HighlightedProduct data={selectProduct} />;
};

export default ProductDetail;
