import { useEffect, useState } from "react";
import MovieInfo from "./components/Movie";
import getPopular from "./api/popular/route";
import getTopRated from "./api/toprated/route";
import Search from "./components/Search";
export default async function Home() {
  const popularMovieData = await getPopular();
  const topRatedMovie = await getTopRated();
  return (
    <>
      <div className="grid grid-cols-5 text-white w-[80%] h-full mx-auto gap-11 mb-[10%]">
        <h1 className="text-white col-span-3 text-4xl">Trending Movies</h1>
        <div className="col-start-5 col-span-1">
          <Search />
        </div>
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
    </>
  );
}
