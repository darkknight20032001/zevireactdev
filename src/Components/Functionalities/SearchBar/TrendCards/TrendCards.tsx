import React from "react";
import TrendCardsItem from "./TrendCardsItem/TrendCardsItem";
import "./TrendCards.sass";
import SuggestionList from "../SuggestionList/SuggestionList";
import { Products } from "../../../../Interfaces/Products";

const TrendCards: React.FC<{
  productInfo: Products[];
}> = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div className="ListBox">
      <h1>Latest Trends</h1>
      <div className="TrendCards">
        {productInfo.map((productList: Products) => {
          return (
            <TrendCardsItem key={productList.id} productList={productList} />
          );
        })}
      </div>
      <SuggestionList />
    </div>
  );
};

export default TrendCards;
