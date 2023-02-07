import {UsersAxiosService} from "./axios.service";
import {usersUrls} from "../configs/urls";

const usersService={
    getAll:()=>UsersAxiosService.get(usersUrls.users)
}
export {
    usersService
}