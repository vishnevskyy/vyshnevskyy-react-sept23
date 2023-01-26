import axios from "axios";
import {baseURL} from "../urls/CommentsUrls";

const axiosInstance=axios.create({baseURL});
export {axiosInstance}