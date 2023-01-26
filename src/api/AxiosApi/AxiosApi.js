import axios from "axios";
import {baseURL} from "../urls/urls";

const axiosInstance = axios.create({baseURL});
export {axiosInstance}