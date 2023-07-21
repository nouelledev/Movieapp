import Image from "next/image";

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
    <div className="text-white  w-[75%] h-full mx-auto mt-[2%]">
      <div className="flex flex-col justify-center text-center">
        <span className=" text-4xl">{res.title}</span>
        <span>Release date: {res.release_date}</span>
        <Image
          src={imagePath + res.poster_path}
          width={400}
          height={300}
          alt={res}
          className="max-w-[400px] mx-auto mb-11"
        />
        <button className=" bg-green-600 my-2 py-2 px-4 inline-block rounded-md">
          Watch now
        </button>
        <span>Runtime: {res.runtime} minutes </span>
        <span className="text-2xl">Overview </span> {res.overview}
      </div>
    </div>
  );
}
