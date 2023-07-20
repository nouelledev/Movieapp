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
    <main className="items-center ">
      <div>
        {res.results.map((movie: any) => (
          <MovieInfo
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </main>
  );
}
