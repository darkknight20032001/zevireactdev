import React, { useState } from "react";
import "./ProductSectionList.sass";
import LikedButton from "./Liked Functionality/LikedButton";
import HoverButton from "./HoverButton/HoverButton";
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
const ProductSectionList: React.FC<{ productList: Products }> = ({
  productList,
}) => {
  const [liked, setLiked] = useState<Boolean>(false);
  const [mouseHover, setMouseHover] = useState<Boolean>(false);
  return (
    <div
      className="productSectionBox"
      onMouseEnter={() => {
        setMouseHover(true);
      }}
      onMouseLeave={() => {
        setMouseHover(false);
      }}
    >
      <LikedButton liked={liked} setLiked={setLiked} />
      <div id="productSectionList">
        <img src={productList.image} alt="" width="100" height="100" />
        <p>{productList.name}</p>
        <p>{productList.price}</p>
        <p>{productList.rating}</p>
        <HoverButton mouseHover={mouseHover} setMouseHover={setMouseHover} />
      
      </div>
    </div>
  );
};

export default ProductSectionList;
