import React from "react";
import "./ProductSectionList.sass";
interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
}
interface MinMaxPriceRange {
  minPrice: string;
  maxPrice: string;
}
const ProductSectionList: React.FC<{ productList: Products}> = ({
  productList,
}) => {
  return (
    <div id="productSectionList">
      <img src={productList.image} alt="" width="100" height="100" />
      <p>{productList.name}</p>
      <p>{productList.price}</p>
      <p>{productList.rating}</p>
    </div>
  );
};

export default ProductSectionList;
