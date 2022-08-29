import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState("");
  const nevigate = useNavigate();
  
  const submitHandaler = (e) => {
    e.preventDefault();
    nevigate("/search/" + search)
  };


  return (
    <form className="sform" onSubmit={submitHandaler}>
      {/* <FaSearch className="inputSvg"></FaSearch> */}
      <input
        className="sinput"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>
    </form>
  );
};

export default Search;
