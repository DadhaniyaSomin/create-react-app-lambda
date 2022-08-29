import Home from "./Home";
import React from "react";
import {  Route, Routes } from "react-router-dom";
import Cousine from "./Cousine";
import Search from "../pages/Search";
import Recipe from "./Recipe";
// import Category from "../componants/Category";

const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cuisine/:tag" element={<Cousine></Cousine>}></Route>
        <Route path="/search/:search" element={<Search></Search>}></Route>
        <Route path="/recipe/:id" element={<Recipe></Recipe>}></Route>
      </Routes>

        //  <Home/>
  );
};

export default Pages;
