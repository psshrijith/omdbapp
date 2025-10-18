import React from "react";

interface MoreInfoProps {
    info: any;
}

const MoreInfo: React.FC<MoreInfoProps> = ({info}) => {

    const {Title, Plot, Actors, Awards, BoxOffice, Country, Director, Genre, Language, Production, Rated, Released, Response, Runtime, Writer, Year } = info;

    return (
        <div className="text-white">
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <p>{Actors}</p>
            <p>{Awards}</p>
            <p>{BoxOffice}</p>
            <p>{Country}</p>
            <p>{Director}</p>
            <p>{Genre}</p>
            <p>{Language}</p>
            <p>{Production}</p>
            <p>{Rated}</p>
            <p>{Released}</p>
            <p>{Response}</p>
            <p>{Runtime}</p>
            <p>{Writer}</p>
            <p>{Year}</p>
        </div>
    )
}

export default MoreInfo;