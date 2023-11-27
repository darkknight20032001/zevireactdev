import { faker } from "@faker-js/faker";

import React, { useEffect, useState } from "react";
import TrendCards from "./TrendCards/TrendCards";
interface Products {
    id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
}
const SearchBar = () => {
  const [productInfo, setProductInfo] = useState<Products[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  function getProductData() {
    let arr: Products[] = [];
    for (let i = 1; i <= 1000; i++) {
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
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onClick={(e) => {
          e.preventDefault();
          setClicked(!clicked);
        }}
      />
      {clicked && <TrendCards productInfo={productInfo} />}
    </div>
  );
};

export default SearchBar;
