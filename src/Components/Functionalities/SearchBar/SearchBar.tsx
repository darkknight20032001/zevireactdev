import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import TrendCards from "./TrendCards/TrendCards";
import { Products } from "../../../Interfaces/Products";
import "./SearchBar.sass";
const SearchBar = () => {
  const [productInfo, setProductInfo] = useState<Products[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  function getProductData() {
    let arr: Products[] = [];
    for (let i = 1; i <= 5; i++) {
      const randomProductName: string = faker.commerce.productName();
      const randomProductPrice: string = faker.commerce.price();
      const randomProductImg: string = faker.image.avatar();
      const productObj: Products = {
        id: String(i),
        name: randomProductName,
        price: randomProductPrice,
        image: randomProductImg,
        rating: String(Math.round(Math.random() * 5)),
      };
      arr.push(productObj);
    }
    setProductInfo(arr);
  }
  useEffect(() => {
    if (clicked) {
      getProductData();
    }
  }, [clicked]);

  function clickOutside() {
    function removeCards() {
      setClicked(false);
    }
    document.addEventListener("mousedown", removeCards);
  }
  clickOutside();
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onClick={(e) => {
          e.preventDefault();
          setClicked(true);
        }}
      />
      <TrendCards clicked={clicked} productInfo={productInfo} />
    </div>
  );
};

export default SearchBar;
