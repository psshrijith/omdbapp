import React from "react";
import { FaStar, FaClock, FaCalendarAlt, FaMoneyBillWave, FaTrophy, FaGlobe, FaBuilding, FaLanguage, FaUserTie, FaPenAlt, FaUsers, FaAward } from 'react-icons/fa';

interface MoreInfoProps {
    info: any;
}

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
    <div className="flex items-start gap-2">
        <span className="text-yellow-400 mt-1">{icon}</span>
        <div>
            <span className="font-semibold text-gray-300">{label}: </span>
            <span className="text-gray-100">{value || 'N/A'}</span>
        </div>
    </div>
);

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
        Production,
        imdbRating,
        Released,
        Runtime,
        Writer,
        Year,
    } = info;

    const infoItems = [
        { icon: <FaUsers />, label: "Actors", value: Actors },
        { icon: <FaUserTie />, label: "Director", value: Director },
        { icon: <FaPenAlt />, label: "Writer", value: Writer },
        { icon: <FaTrophy />, label: "Genre", value: Genre },
        { icon: <FaCalendarAlt />, label: "Released", value: Released },
        { icon: <FaClock />, label: "Runtime", value: Runtime },
        { icon: <FaStar />, label: "IMDb Rating", value: imdbRating },
        { icon: <FaMoneyBillWave />, label: "Box Office", value: BoxOffice, hide: !BoxOffice || BoxOffice === 'N/A' },
        { icon: <FaGlobe />, label: "Country", value: Country },
        { icon: <FaBuilding />, label: "Production", value: Production },
        { icon: <FaAward />, label: "Awards", value: Awards, hide: !Awards || Awards === 'N/A' },
    ];

    return (
        <div className="text-white rounded-2xl shadow-lg p-6 overflow-y-auto flex flex-col md:flex-row gap-6 inset-0">
                {Poster && (
                    <img
                        src={Poster !== "N/A" ? Poster : "/fallback.jpg"}
                        alt={Title}
                        className="w-full md:w-1/3 rounded-lg object-cover max-h-[500px]"
                    />
                )}

                <div className="flex flex-col h-full gap-2 overflow-y-auto">
                    <h2 className="text-2xl font-bold">{Title}</h2>
                    <p className="italic text-gray-300">{Plot}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {infoItems.map((item) => (
                            <InfoItem key={item?.label}
                                      icon={item?.icon}
                                      label={item?.label}
                                      value={item?.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default MoreInfo;
