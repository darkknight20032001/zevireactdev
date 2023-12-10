import React from "react";
import './SearchProduct.sass'
const SearchProduct: React.FC<{
  searchProductItem: string;
  setSearchProductItem: (newSearchProductItem: string) => void;
}> = ({ searchProductItem, setSearchProductItem }) => {
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
