import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import axios from "../API/data";
import "../index.css";

const Cousine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  console.log(params.tag);
  const getCuisine = async (name) => {
    const options = {
      method: "GET",
      url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=98b372a72de443cb9b0d59fd84776ec1&cuisine=${name}`,
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