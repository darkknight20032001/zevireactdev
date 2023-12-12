import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSection from "./Components/Functionalities/ProductSection/ProductSection";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/productSection' element={<ProductSection />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
