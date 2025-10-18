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

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        try {
            setIsLoading(true);
            const data = await fetchMovieDetails(searchQuery);
            if (data === "False") {
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
            <div className="sticky flex flex-col items-center gap-6 top-0 bg-gray-900/90 backdrop-blur-md z-10 py-6 w-full">
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
                </div>

            <div className="flex-grow flex flex-col items-center min-h-0">
                {loading && <div className="text-2xl">Loading movie details...</div>}

                {error && <div className="text-red-400 text-xl mt-6">{error}</div>}
                {!loading && movie.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                        {movie.map((movieItem) => (
                            <MovieDetails key={movieItem.imdbID} movie={movieItem} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowsePage;