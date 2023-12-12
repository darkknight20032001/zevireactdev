import React, { useEffect, useState } from "react";
import TrendCards from "./TrendCards/TrendCards";
import { Products } from "../../../Interfaces/Products";
import "./SearchBar.sass";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { arrProduct } from "../../../FakeData/productDataArr";

const SearchBar = () => {
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState<Products[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  
  useEffect(() => {
    function getProductData() {
      setProductInfo(arrProduct);
    }
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
          ></Button>
        </Stack>
      </div>
      <TrendCards clicked={clicked} productInfo={productInfo} />
    </div>
  );
};

export default SearchBar;
