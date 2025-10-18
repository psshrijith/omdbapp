import React from "react";

interface MoreInfoProps {
    info: any;
}

const MoreInfo: React.FC<MoreInfoProps> = ({info}) => {

    console.log("info is",info)
    const {Title } = info || {};

    return (
        <>
            <h2 className="text-white">{Title}</h2>
            {/*<p>{Plot}</p>*/}
            {/*<p>{Actors}</p>*/}
            {/*<p>{Awards}</p>*/}
            {/*<p>{BoxOffice}</p>*/}
            {/*<p>{Country}</p>*/}
            {/*<p>{Director}</p>*/}
            {/*<p>{Genre}</p>*/}
            {/*<p>{Language}</p>*/}
            {/*<p>{Production}</p>*/}
            {/*<p>{Rated}</p>*/}
            {/*<p>{Released}</p>*/}
            {/*<p>{Response}</p>*/}
            {/*<p>{Runtime}</p>*/}
            {/*<p>{Writer}</p>*/}
            {/*<p>{Year}</p>*/}
        </>
    )
}

export default MoreInfo;