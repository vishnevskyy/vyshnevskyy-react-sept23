const getLaunches=()=>fetch('https://api.spacexdata.com/v4/launches/').then(resp=>resp.json());
export {getLaunches}