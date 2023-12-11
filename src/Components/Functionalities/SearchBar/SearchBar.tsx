import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import TrendCards from "./TrendCards/TrendCards";
import { Products } from "../../../Interfaces/Products";
import "./SearchBar.sass";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

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
      <div className="search-bar-box">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onClick={(e) => {
          e.preventDefault();
          setClicked(true);
        }}
      />
       <Stack className="continueBtn">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={(e) => {
            e.preventDefault();
            navigate("/productSection");
          }}
        >
        </Button>
      </Stack>
      </div>
      <TrendCards clicked={clicked} productInfo={productInfo} />
    </div>
  );
};

export default SearchBar;
