import React from "react";
type searchProps = {
  keyword: string;
};
export default async function searchResult(props: searchProps) {
  const keyword = props.keyword;
  const API_URL = "https://api.themoviedb.org/3";
  const SEARCH_MOVIE = "/search/movie";
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `${API_URL}/${SEARCH_MOVIE}?api_key=${process.env.API_KEY}&query=${keyword}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <>
      <div>
        <div className="grid grid-cols-5 text-white w-[80%] h-full mx-auto gap-11">
          <h1 className="text-white col-span-5 text-4xl">Search results</h1>
          {res?.results?.map((movie: any) => {
            {
              movie.title;
            }
            {
              imagePath + movie.poster_path;
            }
          })}
        </div>
      </div>
    </>
  );
}
