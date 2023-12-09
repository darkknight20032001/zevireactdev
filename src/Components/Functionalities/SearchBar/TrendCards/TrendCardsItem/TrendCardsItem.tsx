import React from "react";
import "./TrendCardsItem.sass";
import { Products } from "../../../../../Interfaces/Products";
const TrendCardsItem: React.FC<{ productList: Products }> = ({
  productList,
}) => {
  return (
    <div id="TrendCardsItem">
      <img src={productList.image} alt="" width="100" height="100" />
      <p>{productList.name}</p>
    </div>
  );
};

export default TrendCardsItem;
