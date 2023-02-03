import {axiosService} from "./axiosService";
import {urls} from "./urls";

const getAllServices={
    getAllUsers:()=>axiosService.get(urls.users),
    getAllComments:()=>axiosService.get(urls.comments)
}
export {
    getAllServices
}