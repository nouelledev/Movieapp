import React from "react";
import getPopular from "../api/popularmovie";
import MovieInfo from "./MovieInfo";

export default async function TrendingContainer() {
  const popularMovieData = await getPopular();
  return (
    <div>
      <div className="grid grid-cols-5 text-white w-[80%] h-full mx-auto gap-11 mb-[10%]">
        <h1 className="text-white col-span-3 text-4xl">Trending Movies</h1>
        <div className="col-start-5 col-span-1"></div>
        {popularMovieData?.results?.map((movie: any) => (
          <MovieInfo
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        ))}
        {/* <button className="justify-center text-4xl col-start-3">
    Load more...
  </button> */}
      </div>
    </div>
  );
}
