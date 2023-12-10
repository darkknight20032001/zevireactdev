import React from "react";
import TrendCardsItem from "./TrendCardsItem/TrendCardsItem";
import "./TrendCards.sass";
import SuggestionList from "../SuggestionList/SuggestionList";
import { Products } from "../../../../Interfaces/Products";

const TrendCards: React.FC<{
  productInfo: Products[];
  clicked: boolean;
}> = ({ productInfo, clicked }) => {
  console.log("Clicked is ",clicked);
  return (
    <div className={clicked ? "ListBox" : "NoListBox"}>
      <h2>Latest Trends</h2>
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
