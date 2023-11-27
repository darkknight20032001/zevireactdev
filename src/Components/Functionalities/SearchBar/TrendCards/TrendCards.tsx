import React from "react";
import TrendCardsItem from "./TrendCardsItem/TrendCardsItem";
import "./TrendCards.sass";
interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
}
const TrendCards: React.FC<{
  productInfo: Products[];
}> = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div>
      <h1>Latest Trends</h1>
      <div className="TrendCards" >
      {productInfo.map((productList: Products) => {
        return (
         
            <TrendCardsItem key={productList.id} productList={productList} />
         
        );
      })}
      </div>
    </div>
  );
};

export default TrendCards;
