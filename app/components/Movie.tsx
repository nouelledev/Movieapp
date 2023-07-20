import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

type MovieProps = {
  title: string;
  id: number;
  release_date: string;
  poster_path: string;
  overview: string;
};
const MovieInfo = (props: MovieProps) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="w-full h-full mx-auto">
      <h1>{props.title}</h1>
      <h2>{props.release_date}</h2>
      <Link href={`/${props.id}`}>
        <Image
          src={imagePath + props.poster_path}
          width={300}
          height={300}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default MovieInfo;
