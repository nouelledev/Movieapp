import MovieInfo from "./components/Movie";
export default async function Home() {
  const API_URL = "https://api.themoviedb.org/3";
  const SEARCH_MOVIE = "/search/keyword";
  const POPULAR_MOVIE = "/movie/popular";
  const data = await fetch(
    `${API_URL}/${POPULAR_MOVIE}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  console.log(res);
  const searchMovies = () => {};
  return (
    <>
      <h1 className="text-center text-white text-6xl">Nouelle Flixer</h1>
      <form>
        <input type="text"></input>
        <button type="submit">Search movies</button>
      </form>
      <div className=" text-white w-fit h-full">
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
    </>
  );
}
