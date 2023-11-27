import React from "react";
import "./TrendCardsItem.sass";
interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
}
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
