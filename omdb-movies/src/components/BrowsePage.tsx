import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BrowsePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-6 fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                />

                <button
                    className="cursor-pointer rounded-xl"
                    onClick={() => console.log("search")}
                >
                    <FontAwesomeIcon icon={faSearch} className="text-white w-full h-full pt-1" size="2x"/>
                </button>
            </div>
        </div>
    );
};

export default BrowsePage;