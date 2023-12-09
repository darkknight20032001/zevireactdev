import React from "react";
import PriceFilter from "./PriceFilter/PriceFilter";
import RatingsFilter from "./RatingsFilter/RatingsFilter";
import "./ProductFilter.sass";
import { MinMaxPriceRange } from "../../../../Interfaces/MinMaxPriceRange";
const ProductFilter: React.FC<{
  selectPrice: MinMaxPriceRange;
  setSelectPrice: (newPriceRange: MinMaxPriceRange) => void;
}> = ({ selectPrice, setSelectPrice }) => {
  return (
    <div className="ProductFilter">
      <PriceFilter selectPrice={selectPrice} setSelectPrice={setSelectPrice} />
      <RatingsFilter />
    </div>
  );
};

export default ProductFilter;
