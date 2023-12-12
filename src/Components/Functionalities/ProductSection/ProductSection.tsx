import React, { useEffect, useState } from "react";
import ProductSectionList from "./ProductSectionList/ProductSectionList";
import "./ProductSection.sass";
import ProductFilter from "./ProductFilter/ProductFilter";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Products } from "../../../Interfaces/Products";
import { MinMaxPriceRange } from "../../../Interfaces/MinMaxPriceRange";
import LazyLoad from "react-lazy-load";
import { arr } from "../../../FakeData/productDataArr";

const ProductSection: React.FC = () => {
  const [productData, setProductData] = useState<Products[]>([]);
  const [searchProductItem, setSearchProductItem] = useState<string>(``);
  const [filteredData, setFilteredData] = useState<Products[]>([]);
  const [ratingPts, setRatingPts] = useState<string>(`0`);
  const [selectPrice, setSelectPrice] = useState<MinMaxPriceRange>({
    minPrice: "0",
    maxPrice: "5000",
  });

  useEffect(() => {
    function getProductSection() {
      setProductData(arr);
      setFilteredData(arr);
    }
    getProductSection();
  }, []);

  useEffect(() => {
    function filterMyData() {
      const dataToFilter = productData.filter((item: Products) => {
        return (
          Number(item.price) >= Number(selectPrice.minPrice) &&
          Number(item.price) <= Number(selectPrice.maxPrice)
        );
      });
      setFilteredData(dataToFilter);
    }
    if (productData.length > 0) {
      filterMyData();
    }
  }, [selectPrice,productData]);

  useEffect(() => {
    function searchFilter() {
      const dataToFilter = productData.filter((item: Products) => {
        return item.name
          .toLowerCase()
          .includes(searchProductItem.toLowerCase());
      });

      setFilteredData(dataToFilter);
    }
    if (productData.length > 0) {
      searchFilter();
    }
  }, [searchProductItem,productData]);

  useEffect(() => {
    function filterRatings() {
      const dataToFilter = productData.filter((item: Products) => {
        return ratingPts !== `0`
          ? item.rating === ratingPts
          : ratingPts !== item.rating;
      });

      setFilteredData(dataToFilter);
    }
    if (productData.length > 0) {
      filterRatings();
    }
  }, [ratingPts,productData]);
  return (
    <div className="productSection">
      <SearchProduct setSearchProductItem={setSearchProductItem} />
      <h3>Search Results</h3>
      <div className="filterProduct">
        <ProductFilter
          
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
                <LazyLoad
                  key={productList.id}
                  className="lazyLoader"
                  offset={10}
                >
                  <ProductSectionList productList={productList} />
                </LazyLoad>
              );
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
