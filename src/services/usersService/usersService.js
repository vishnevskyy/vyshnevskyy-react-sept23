import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

const usersService={
    getAllUsers:()=>axiosService.get(urls.users),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`),
    getTodosByUserId:(id)=>axiosService.get(`${urls.users}/${id}/todos`),
    getAlbumsByUserId:(id)=>axiosService.get(`${urls.users}/${id}/albums`),
    getCommentsByUserId:(id)=>axiosService.get(`${urls.users}/${id}/comments`),

}

export{
        usersService
}