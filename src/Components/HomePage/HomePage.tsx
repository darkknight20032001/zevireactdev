import React from "react";
import "./HomePage.sass";
import SearchBar from "../Functionalities/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
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
  );
};

export default HomePage;
