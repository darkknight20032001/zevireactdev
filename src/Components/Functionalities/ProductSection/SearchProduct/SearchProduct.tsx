import React from "react";
import './SearchProduct.sass'
const SearchProduct: React.FC<{
  
  setSearchProductItem: (newSearchProductItem: string) => void;
}> = ({  setSearchProductItem }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => {
        setSearchProductItem(e.target.value);
      }}
    />
  );
};

export default SearchProduct;
