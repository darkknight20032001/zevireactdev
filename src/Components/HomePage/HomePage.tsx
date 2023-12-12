import React from "react";
import "./HomePage.sass";
import SearchBar from "../Functionalities/SearchBar/SearchBar";


const HomePage = () => {
  return (
    <div className="MainPageBox">
      <div className="HomePageBox">
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
