import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const carsService={
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    deleteCar:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
}
export {
    carsService
}