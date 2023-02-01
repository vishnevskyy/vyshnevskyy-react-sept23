import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";


const commentsService={
    getAllComments:()=>axiosService.get(urls.comments),
    getCommentById:(id)=>axiosService.get(`${urls.comments}/${id}`)

}
export {
    commentsService
}