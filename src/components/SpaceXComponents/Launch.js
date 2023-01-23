import React from 'react';

const Launch = ({launch}) => {
    return (
        <div>
            <div><h3>{launch.flight_number}</h3></div>
            <div>{launch.name}</div>
            <img src={launch.links.patch.small} alt=""/>
        </div>
    );
};

export {Launch};