import {axiosInstance} from "../AxiosApi/AxiosApi";
import {urls} from "../urls/urls";

const UsersService= {
    getAll:()=>axiosInstance.get(urls.users),
    create:(newUser)=>axiosInstance.post(urls.users,newUser),
    updateById:(id,data)=>axiosInstance.put(`${urls.users}/${id}`),
    deleteById:(id)=>axiosInstance.delete(`${urls.users}/${id}`)
}
export {UsersService}