import Image from "next/image";
import { FC } from "react";
import MovieInfo from "./components/Movie";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className=" text-white w-full h-full">
      {res.results?.map((movie: any) => (
        <MovieInfo
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}
