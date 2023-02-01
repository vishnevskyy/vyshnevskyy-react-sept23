import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

const todosService={
    getAllTodos:()=>axiosService.get(urls.todos),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`),
}
export {
    todosService
}