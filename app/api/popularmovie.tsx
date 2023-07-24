export default async function getPopular() {
  const API_URL = "https://api.themoviedb.org/3";
  const POPULAR_MOVIE = "/movie/popular";
  const PAGE_REQUEST = 1;
  const res = await fetch(
    `${API_URL}/${POPULAR_MOVIE}?api_key=${process.env.API_KEY}&page=${PAGE_REQUEST}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}
