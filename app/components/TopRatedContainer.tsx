import React from "react";
import getTopRated from "../api/topratedmovie";
import MovieInfo from "./MovieInfo";

export default async function PopularContainer() {
  const topRatedMovie = await getTopRated();
  return (
    <div>
      <div className="grid grid-cols-5 text-white w-[80%] h-full mx-auto gap-11">
        <h1 className="text-white col-span-5 text-4xl">Top Rated Movies</h1>
        {topRatedMovie?.results?.map((movie: any) => (
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
