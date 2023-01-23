import React, {useEffect, useState} from 'react';
import {getLaunches} from "../../api/getLaunches";
import {Launch} from "./Launch";

const Launches = () => {
    const [launches,setLaunches]=useState([])
    useEffect(() => {
        getLaunches().then(resp=>setLaunches(resp))
    }, [])
    return (
        <div>
            {launches.map(launch =><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};