import React from "react";
import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState("");

  console.log(search);
  const submitHandaler = (e) => {
    // e.preventDefault();
    console.log(search);
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
