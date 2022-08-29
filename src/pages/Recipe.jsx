import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "../API/data";
import styled from "styled-components";
import "../index.css";

const Recipe = () => {
  const [recipe, SetRecipe] = useState([]);
  const [active, serActiveTab] = useState("Instruction");
  let params = useParams();
  console.log(params.id);
  const getrecipe = async (id) => {
    const options = {
      method: "GET",
      url: `https://api.spoonacular.com/recipes/${id}/information/?apiKey=1f07cf1909964d859a12b07ef33b30c1`,
      headers: {
        accept: "application/json",
      },
    };

    const api = await axios.request(options);
    const recipeDetail = await api.data;
    SetRecipe(recipeDetail);
  };

  useEffect(() => {
    getrecipe(params.id);
  }, [params.id]);

  return (
    <DetailWrrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} className="imgRecipe"></img>
      </div>

      <Info>
        <Button
          className={active === "Instruction" ? " active" : ""}
          onClick={() => serActiveTab("Instruction")}
        >
          Instruction
        </Button>
        <Button
          className={active === "Ingrediants" ? " active" : ""}
          onClick={() => serActiveTab("Ingrediants")}
        >
          Ingrediants
        </Button>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
        </div>

      </Info>
    </DetailWrrapper>
  );
};

const DetailWrrapper = styled.div`
   margin-top : 10rem;
   margin-bottom : 5rem;
   display : flex;
   .active {
    background :linear-gradient(35deg ,#494949 , #313131);
    color : white;
   }
   h2 {
     margin-bottom : 2rem;
   } 
   li {
     font-size 1.2rem ; 
     line-height : 2.5rem ; 
   }
   ul {
     margin-top : 2rem; 
 }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: 313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 22rem;
`;

export default Recipe;
