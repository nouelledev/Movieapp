export default async function getTopRated() {
  const API_URL = "https://api.themoviedb.org/3";
  const TOP_RATED = "/movie/top_rated";
  const PAGE_REQUEST = 1;
  const res = await fetch(
    `${API_URL}/${TOP_RATED}?api_key=${process.env.API_KEY}&page=${PAGE_REQUEST}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}
