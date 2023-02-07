import {CarsAxiosService} from "./axios.service";
import {carsUrls} from "../configs/urls";

const carsService={
    getAll:()=>CarsAxiosService.get(carsUrls.cars)
}
export {
    carsService
}