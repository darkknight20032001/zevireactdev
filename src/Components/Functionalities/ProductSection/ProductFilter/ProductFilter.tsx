import React from "react";
import PriceFilter from "./PriceFilter/PriceFilter";
import RatingsFilter from "./RatingsFilter/RatingsFilter";
import "./ProductFilter.sass";
import { MinMaxPriceRange } from "../../../../Interfaces/MinMaxPriceRange";
const ProductFilter: React.FC<{
  selectPrice: MinMaxPriceRange;
  setSelectPrice: (newPriceRange: MinMaxPriceRange) => void;
  ratingPts: Number;
  setRatingPts: (newRatingPoints: Number) => void;
}> = ({ selectPrice, setSelectPrice, ratingPts, setRatingPts }) => {
  return (
    <div className="ProductFilter">
      <PriceFilter selectPrice={selectPrice} setSelectPrice={setSelectPrice} />
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
