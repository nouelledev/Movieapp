"use client";
import React from "react";
const Search = () => {
  return (
    <div className="flex flex-row">
      <form className="rounded-md pt-5">
        <input type="text" className="md:max-w-[210px] text-black"></input>
        <button className="text-black bg-white">Search</button>
      </form>
    </div>
  );
};

export default Search;
