import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import {  useParams } from "react-router-dom";
import axios from "../API/data";
import "../index.css";

const Search = () => {
    const [search, setSearchItem] = useState([]);
    let params = useParams();
    console.log(params.search);
    const getSearch = async (search) => {
      const options = {
        method: "GET",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=bae96180cd93409aa123517ee0f4b2a7&cuisine=${search}`,
        headers: {
          accept: "application/json",
        },
      };
  
      const api = await axios.request(options);
      console.log(api);
      const searchItem = await api.data.results;
      setSearchItem(searchItem);
    };
  
    useEffect(() => {
        getSearch(params.search);
    }, [params.search]);
  
    return (
      <div className="Grid">
        {search.map((items) => {
          return (
            <div className="Card" key={items.id}>
              <img src={items.image} alt=""></img>
              <h4>{items.title}</h4>
            </div>
          );
        })}
      </div>
    );
  };

export default Search
 