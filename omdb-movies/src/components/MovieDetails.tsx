import React from "react";
import no_image from "../assets/no_image.jpg";
import {getMovieResults} from "../utils/api";

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
    const Poster = movie?.Poster === "N/A" ? no_image : movie?.Poster;

    const handleClick = async (movieTitle: string) => {
        try {
            const data = await getMovieResults(movieTitle);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg flex flex-col w-72 hover:scale-105 transition-transform cursor-pointer">
            <img src={Poster} className="h-96 w-full"/>

          <div className="p-4 gap-2">
                <h2 className="text-xl font-bold">{movie?.Title}</h2>
                <p>{movie?.Year}</p>
                <button
                    className="p-2 bg-red-600 rounded-xl"
                    onClick={()=>  handleClick(movie?.Title)}
                >
                    More Info
                </button>
          </div>
        </div>
    )
}

export default MovieDetails;