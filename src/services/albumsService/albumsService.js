import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

const albumsService={
    getAllAlbums:()=>axiosService.get(urls.albums),
    getAlbumsById:(id)=>axiosService.get(`${urls.albums}/${id}`)

}
export {
    albumsService
}