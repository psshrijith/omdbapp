import React, {useState} from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchMovieDetails} from "../utils/api";
import MovieDetails from "./MovieDetails";
import {Movie} from './MovieDetails';

const BrowsePage: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovie] = useState<Movie[]>([]);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setIsLoading] = useState(false);
    console.log("movie details", movie)

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        try {
            setIsLoading(true);
            const data = await fetchMovieDetails(searchQuery);
            if (data.Response === "False") {
                setError("Movie not found");
                setMovie([]);
            } else {
                setMovie(data);
                setError("");
                setIsModalOpen(true);
            }
        } catch (err) {
            setError("Something went wrong");
            setMovie([]);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed min-h-screen flex flex-col justify-center items-center gap-6 inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-auto">
            <p
                className="font-bold text-7xl text-center text-white">
                Search for any movie<br/>
                or TV show
            </p>
            <div className="flex flex-row gap-4">
                <input
                    className="w-96 h-12 border-blue-400 border-2 rounded-xl p-4 text-white bg-transparent"
                    type="search"
                    placeholder="Search for movies, TV shows..."
                    value={searchQuery}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchQuery(value);
                        if(value===''){
                            setMovie([]);
                            setError('');
                            setIsModalOpen(false);
                        }
                    }}
                    />
                    <button
                        className="cursor-pointer rounded-xl"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faSearch} className="text-white w-full h-full pt-1" size="2x"/>
                    </button>
            </div>

            {loading ? (<div className="text-center py-8 text-white text-3xl">Loading Movie details...</div>):
                (isModalOpen &&
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
                    {movie.map((movieItem) => (
                        <MovieDetails key={movieItem.imdbID} movie={movieItem} />
                    ))}
                </div>
                )}
        </div>
    );
};

export default BrowsePage;