import Image from "next/image";
import React from "react";

const MovieInfo = ({ title, id, release_date, poster_path, overview }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="">
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Image
        src={imagePath + poster_path}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;
