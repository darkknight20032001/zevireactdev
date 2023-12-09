import React from "react";

import SearchBar from "../Functionalities/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
 const navigate = useNavigate();
  return (
    <div>
       <SearchBar />
      <button onClick={(e) =>{
        e.preventDefault();
        navigate('/productSection')}}>Continue here...</button>
    </div>
  );
};

export default HomePage;
