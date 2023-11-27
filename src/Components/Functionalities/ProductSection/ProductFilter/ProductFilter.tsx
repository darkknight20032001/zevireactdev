import React from "react";
import PriceFilter from "./PriceFilter/PriceFilter";
import RatingsFilter from "./RatingsFilter/RatingsFilter";
import "./ProductFilter.sass";
interface MinMaxPriceRange {
  minPrice: string;
  maxPrice: string;
}
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
