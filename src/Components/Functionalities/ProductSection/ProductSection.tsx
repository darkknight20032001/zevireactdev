import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import ProductSectionList from "./ProductSectionList/ProductSectionList";
import "./ProductSection.sass";
import ProductFilter from "./ProductFilter/ProductFilter";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Products } from "../../../Interfaces/Products";
import { MinMaxPriceRange } from "../../../Interfaces/MinMaxPriceRange";
import LazyLoad from "react-lazy-load";

const ProductSection = () => {
  const [productData, setProductData] = useState<Products[]>([]);
  const [searchProductItem, setSearchProductItem] = useState<string>(``);
  const [filteredData, setFilteredData] = useState<Products[]>([]);
  const [ratingPts, setRatingPts] = useState<string>(`0`);
  const [selectPrice, setSelectPrice] = useState<MinMaxPriceRange>({
    minPrice: "0",
    maxPrice: "5000",
  });

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
    const dataToFilter = productData.filter((item: Products) => {
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
    const dataToFilter = productData.filter((item: Products) => {
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
    const dataToFilter = productData.filter((item: Products) => {
      return ratingPts !== `0`
        ? item.rating === ratingPts
        : ratingPts !== item.rating;
    });

    setFilteredData(dataToFilter);
  }
  useEffect(() => {
    if (productData.length > 0) {
      filterRatings();
    }
  }, [ratingPts]);
  return (
    <div className="productSection">
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
          {productData.length > 0 && filteredData.length === 0 && (
            <div className="productSectionListDummy">
              <h3>No Products Available</h3>
            </div>
          )}
          {productData.length > 0 ? (
            filteredData.map((productList: Products) => {
              return (
              <LazyLoad key={productList.id} className='lazyLoader' offset={10}>
              <ProductSectionList  productList={productList} />
               </LazyLoad>);
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
