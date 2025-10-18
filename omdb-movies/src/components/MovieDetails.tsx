import React from "react";
import no_image from "../assets/no_image.jpg";

export interface Movie{
    Title: string,
    Year: string,
    imdbID: string,
    Type: string
    Poster: string
}

type MovieDetailsProps = {
    movie: Movie;
}
const MovieDetails: React.FC<MovieDetailsProps> = ({movie}) => {
    const {Title, Year} = movie;
    const Poster = movie?.Poster === "N/A" ? no_image : movie.Poster;

    return (
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg
                 flex flex-col w-72 hover:scale-105 transition-transform cursor-pointer">

            <img src={Poster} className="h-96 w-full"/>

          <div className="p-4 gap-2">
                <h2 className="text-xl font-bold">{Title}</h2>
                <p>{Year}</p>
          </div>
        </div>
    )
}

export default MovieDetails;