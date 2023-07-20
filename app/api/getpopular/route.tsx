export default async function getPopular() {
  const API_URL = "https://api.themoviedb.org/3";
  const SEARCH_MOVIE = "/search/keyword";
  const POPULAR_MOVIE = "/movie/popular";
  const data = await fetch(
    `${API_URL}/${POPULAR_MOVIE}?api_key=${process.env.API_KEY}`
  );
  const res = data;
  return res.json();
}
