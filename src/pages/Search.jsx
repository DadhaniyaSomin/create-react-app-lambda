import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import {  useParams , Link} from "react-router-dom";
import axios from "../API/data";
import "../index.css";

const Search = () => {
    const [search, setSearchItem] = useState([]);
    let params = useParams();
    console.log(params.search);
    const getSearch = async (search) => {
      const options = {
        method: "GET",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=1f07cf1909964d859a12b07ef33b30c1&cuisine=${search}`,
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
            <Link to={'/recipe/' + items.id} >
              <img src={items.image} alt=""></img>
              <h4>{items.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

export default Search
 