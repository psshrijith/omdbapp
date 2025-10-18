import React from "react";

interface MoreInfoProps {
    info: any;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ info }) => {
    if (!info) return <p className="text-gray-400">Loading movie details...</p>;

    const {
        Title,
        Poster,
        Plot,
        Actors,
        Awards,
        BoxOffice,
        Country,
        Director,
        Genre,
        Language,
        Production,
        Rated,
        Released,
        Runtime,
        Writer,
        Year,
    } = info;

    return (
        <div className="text-white rounded-2xl shadow-lg p-6 overflow-y-auto flex gap-3 inset-0">
                {Poster && (
                    <div className="flex-shrink-0">
                        <img
                            src={Poster !== "N/A" ? Poster : "/fallback.jpg"}
                            alt={Title}
                            className="h-50 w-40 rounded-lg object-cover"
                        />
                    </div>
                )}

                <div className="flex flex-col h-full gap-2 overflow-y-auto">
                    <h2 className="text-2xl font-bold">{Title}</h2>
                    <p className="italic text-gray-300">{Plot}</p>
                    <p><span className="font-semibold">Actors:</span> {Actors}</p>
                    <p><span className="font-semibold">Director:</span> {Director}</p>
                    <p><span className="font-semibold">Writer:</span> {Writer}</p>
                    <p><span className="font-semibold">Genre:</span> {Genre}</p>
                    <p><span className="font-semibold">Released:</span> {Released}</p>
                    <p><span className="font-semibold">Runtime:</span> {Runtime}</p>
                    <p><span className="font-semibold">Rated:</span> {Rated}</p>
                    <p><span className="font-semibold">BoxOffice:</span> {BoxOffice}</p>
                    <p><span className="font-semibold">Awards:</span> {Awards}</p>
                    <p><span className="font-semibold">Country:</span> {Country}</p>
                    <p><span className="font-semibold">Production:</span> {Production}</p>
                    <p><span className="font-semibold">Year:</span> {Year}</p>
                </div>
            </div>
    );
};

export default MoreInfo;
