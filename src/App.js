
import './App.css';
import {useEffect, useState} from "react";
import {carsService} from "./services/carsService";
import {Cars} from "./components/Cars/Cars";
import CarForm from "./components/CarForm/CarForm";


function App() {

    const [cars,setCars]=useState([])

    const [forceRender, setForceRender] = useState(0);
    const [updateCar,setUpdateCar]=useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars([...data]))
    },[forceRender])


    return (
        <div className="App">
            <CarForm setCars={setCars} updateCar={updateCar} setForceRender={setForceRender}/>
            <hr/>
            <Cars cars={cars} setForceRender={setForceRender} setUpdateCar={setUpdateCar}/>
        </div>
    );
}

export default App;
