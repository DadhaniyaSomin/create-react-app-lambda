import React, { useEffect, useState } from "react";
import "../index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from '../API/data';
import { Link } from "react-router-dom";

const Populer = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopulator();
  },);

  const getPopulator = async () => {

    //we won't call API Our localstage has aleardy has data stored in local stage 
    //bythis we can pricent calling API agian adn again also recipe will same won;t 
    //change every time page refrease

    const check = localStorage.getItem("vegetarian");
    if (check) {
      setPopular(JSON.parse(check));
    } else {


      const options = {
        method: 'GET',
        params: {number: '10', tags: 'vegetarian'},
        headers: {
          'accept' : "application/json",
        }
      };

       const api =  await axios.request(options);
       const data = await api.data;
       localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
       setPopular(data.recipes);
    }
  };


  return (
    <div>
      <div className="Wrapper">
        <h3> Populer Pics </h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="Card">
                <Link to={'/recipe/' + recipe.id} >
                  <p> {recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                  <div className="Gradiant"></div>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Populer;
