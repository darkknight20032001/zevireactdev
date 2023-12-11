import React from "react";
import "./HomePage.sass";
import SearchBar from "../Functionalities/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <div className="MainPageBox">
      <div className="HomePageBox">
     
        <SearchBar />
        

        {/* <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/productSection");
        }}
      >
        Continue here...
      </button> */}
    
      </div>
      
    </div>
  );
};

export default HomePage;
