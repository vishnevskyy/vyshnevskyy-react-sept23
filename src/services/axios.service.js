import axios from "axios";
import {CarBaseURL, UserBaseURL} from "../configs/urls";
const UsersAxiosService=axios.create({baseURL:UserBaseURL});
const CarsAxiosService=axios.create({baseURL:CarBaseURL});
export {
    UsersAxiosService,
    CarsAxiosService
    }