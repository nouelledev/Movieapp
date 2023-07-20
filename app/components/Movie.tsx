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
    <div className="w-full h-full mx-auto text-white">
      <h1 className="text-base ">{props.title}</h1>
      <Link href={`/${props.id}`}>
        <Image
          src={imagePath + props.poster_path}
          width={250}
          height={250}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default MovieInfo;
