import {axiosInstance} from "./axiosApi";
import {urls} from "../urls/CommentsUrls";

const commentsService={
    getAll:()=>axiosInstance.get(urls.comments),
    create:(data)=>axiosInstance.post(urls.comments, data)
}
export {commentsService}