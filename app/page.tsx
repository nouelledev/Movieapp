import MovieInfo from "./components/Movie";
export default async function Home() {
  const API_URL = "https://api.themoviedb.org/3";
  const SEARCH_MOVIE = "/search/keyword";
  const POPULAR_MOVIE = "/movie/popular";
  const data = await fetch(
    `${API_URL}/${POPULAR_MOVIE}?api_key=${process.env.API_KEY}`
  );
  const popularmovie = await data.json();
  console.log(popularmovie);
  console.log(popularmovie);
  const searchMovies = () => {};
  return (
    <>
      <div className="grid grid-cols-4 text-white w-[80%] h-full mx-auto gap-11">
        <h1 className="text-white col-span-4 text-4xl">Trending Movies</h1>
        {popularmovie.results?.map((movie: any) => (
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
    </>
  );
}
