import React from "react";
import PriceFilter from "./PriceFilter/PriceFilter";
import RatingsFilter from "./RatingsFilter/RatingsFilter";
import "./ProductFilter.sass";
import { MinMaxPriceRange } from "../../../../Interfaces/MinMaxPriceRange";
const ProductFilter: React.FC<{
  
  setSelectPrice: (newPriceRange: MinMaxPriceRange) => void;
  ratingPts: string;
  setRatingPts: (newRatingPoints: string) => void;
}> = ({  setSelectPrice, ratingPts, setRatingPts }) => {
  return (
    <div className="ProductFilter">
      <PriceFilter  setSelectPrice={setSelectPrice} />
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
        }}
      />
      <RatingsFilter ratingPts={ratingPts} setRatingPts={setRatingPts} />
    </div>
  );
};

export default ProductFilter;
