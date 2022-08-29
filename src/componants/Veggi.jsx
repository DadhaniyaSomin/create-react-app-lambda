import React, { useEffect, useState } from "react";
import "../index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from '../API/data';

const Veggi = () => {
    const [veggi, setVeggi] = useState([]);

    useEffect(() => {
      getVeggie();
    },);
  
    const getVeggie = async () => {
  
      const check = localStorage.getItem("vegetarian");
  
      if (check) {
        setVeggi(JSON.parse(check));

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
         setVeggi(data.recipes);
      }
    };
  
  
    return (
      <div>
        <div className="Wrapper">
          <h3> Our Vegitatrian Picks </h3>
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggi.map((veggi) => {
              return (
                <SplideSlide key={veggi.id}>
                  <div className="Card">
                    <p> {veggi.title}</p>
                    <img src={veggi.image} alt={veggi.title}></img>
                    <div className="Gradiant"></div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    );
}

export default Veggi
