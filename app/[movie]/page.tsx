export default async function MovieDetail({ params }: any) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  console.log(params);
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
      </div>
    </div>
  );
}
