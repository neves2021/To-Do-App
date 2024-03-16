/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Search:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
