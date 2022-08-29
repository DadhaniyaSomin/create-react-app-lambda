import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import {  Link, useParams } from "react-router-dom";
import axios from "../API/data";
import "../index.css";

const Cousine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  console.log(params.tag);
  const getCuisine = async (name) => {
    const options = {
      method: "GET",
      url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=1f07cf1909964d859a12b07ef33b30c1&cuisine=${name}`,
      headers: {
        accept: "application/json",
      },
    };

    const api = await axios.request(options);
    const cuisine = await api.data.results;
    //  console.log(cuisine);
    setCuisine(cuisine);
  };

  useEffect(() => {
    getCuisine(params.tag);
  }, [params.tag]);

  return (
    <div className="Grid">
      {cuisine.map((items) => {
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

export default Cousine;
