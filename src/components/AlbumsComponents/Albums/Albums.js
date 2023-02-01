import React, {useEffect, useState} from 'react';
import {albumsService} from "../../../services/albumsService/albumsService";
import {Album} from "../Album/Album";

import css from'./Albums.module.css'

const Albums = () => {
    const [albums,setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAllAlbums().then(({data})=>setAlbums(data))
    },[])
    return (
        <div className={css.Albums}>
                {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};
export {Albums};