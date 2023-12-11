import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import ProductSectionList from "./ProductSectionList/ProductSectionList";
import "./ProductSection.sass";
import ProductFilter from "./ProductFilter/ProductFilter";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Products } from "../../../Interfaces/Products";
import { MinMaxPriceRange } from "../../../Interfaces/MinMaxPriceRange";

const ProductSection = () => {
  const [productData, setProductData] = useState<Products[]>([]);
  const [searchProductItem, setSearchProductItem] = useState<string>(``);
  const [filteredData, setFilteredData] = useState<Products[]>([]);

  const [selectPrice, setSelectPrice] = useState<MinMaxPriceRange>({
    minPrice: "0",
    maxPrice: "5000",
  });
  const [ratingPts, setRatingPts] = useState<Number>(0);
  function getProductSection() {
    let arr: Products[] = [];
    for (let i = 1; i <= 100; i++) {
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
    setFilteredData(dataToFilter);
  }
  useEffect(() => {
    if (productData.length > 0) {
      filterMyData();
    }
  }, [selectPrice]);
  function searchFilter() {
    const dataToFilter = productData.filter((item) => {
      return item.name.toLowerCase().includes(searchProductItem.toLowerCase());
    });

    setFilteredData(dataToFilter);
  }
  useEffect(() => {
    if (productData.length > 0) {
      searchFilter();
    }
  }, [searchProductItem]);

  function filterRatings() {
    const dataToFilter = productData.filter((item) => {
      return ratingPts !== 0
        ? Number(item.rating) === ratingPts
        : ratingPts !== Number(item.rating);
    });
    if (ratingPts !== 0) {
      console.log("The rating is ", ratingPts);
      console.log(dataToFilter);
    }
    setFilteredData(dataToFilter);
  }
  useEffect(() => {
    if (productData.length > 0) {
      console.log("Hello");
      filterRatings();
    }
  }, [setRatingPts]);
  return (
    <div className="productSection">
      {/* <h1>{String(ratingPts)}</h1> */}
      <SearchProduct
        searchProductItem={searchProductItem}
        setSearchProductItem={setSearchProductItem}
      />
      <h3>Search Results</h3>
      <div className="filterProduct">
        <ProductFilter
          selectPrice={selectPrice}
          setSelectPrice={setSelectPrice}
          ratingPts={ratingPts}
          setRatingPts={setRatingPts}
        />
        <div className="productSectionList">
        {productData.length>0 && filteredData.length === 0 && (
            <div className="productSectionListDummy"><h3>No Data Found</h3></div>
          )}
          {productData.length > 0 ? (
            filteredData.map((productList) => {
              return <ProductSectionList productList={productList} />;
            })
          ) : (
            <div className="productSectionListDummy"></div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
