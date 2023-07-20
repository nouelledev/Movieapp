import MovieInfo from "./components/Movie";
export default async function Home() {
  const API_URL = "https://api.themoviedb.org/3";
  const TOP_RATED = "/movie/top_rated";
  const POPULAR_MOVIE = "/movie/popular";
  const popularmoviedata = await fetch(
    `${API_URL}/${POPULAR_MOVIE}?api_key=${process.env.API_KEY}`
  );
  const popularmovie = await popularmoviedata.json();
  const topratedmoviedata = await fetch(
    `${API_URL}/${TOP_RATED}?api_key=${process.env.API_KEY}`
  );
  const topratedmovie = await topratedmoviedata.json();
  return (
    <>
      <div className="grid grid-cols-4 text-white w-[80%] h-full mx-auto gap-11 mb-[10%]">
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
      <div className="grid grid-cols-4 text-white w-[80%] h-full mx-auto gap-11">
        <h1 className="text-white col-span-4 text-4xl">Top Rated Movies</h1>
        {topratedmovie.results?.map((movie: any) => (
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
