import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import ProductSectionList from "./ProductSectionList/ProductSectionList";
import "./ProductSection.sass";
import SearchBar from "../SearchBar/SearchBar";
import ProductFilter from "./ProductFilter/ProductFilter";
interface Products {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
}
interface MinMaxPriceRange {
  minPrice: string;
  maxPrice: string;
}
const ProductSection = () => {
  const [productData, setProductData] = useState<Products[]>([]);
  const [filteredData, setFilteredData] = useState<Products[]>([]);

  const [selectPrice, setSelectPrice] = useState<MinMaxPriceRange>({
    minPrice: "0",
    maxPrice: "5000",
  });
  function getProductSection() {
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
    setProductData(arr);
    setFilteredData(arr);
  }
  useEffect(() => {
    getProductSection();
  }, []);
  function filterMyData() {
    const dataToFilter = productData.filter((item) => {
      return (
        Number(item.price) >= Number(selectPrice.minPrice) &&
        Number(item.price) <= Number(selectPrice.maxPrice)
      );
    });
    console.log(dataToFilter);
    setFilteredData(dataToFilter);
  }
  useEffect(() => {
    if (productData.length > 0) {
      filterMyData();
    }
  }, [selectPrice]);
  return (
    <div className="filterProduct">
      <ProductFilter
        selectPrice={selectPrice}
        setSelectPrice={setSelectPrice}
      />
      <div className="productSectionList">
       {productData.length > 0 &&
          filteredData.map((productList) => {
            return <ProductSectionList productList={productList} />;
          })}
      </div>
    </div>
  );
};

export default ProductSection;
