"use client";
import React from "react";
const Search = ({ params }: any) => {
  const { movie } = params;
  return (
    <div className="flex flex-row">
      <h1>Hello you searched</h1>
    </div>
  );
};

export default Search;
