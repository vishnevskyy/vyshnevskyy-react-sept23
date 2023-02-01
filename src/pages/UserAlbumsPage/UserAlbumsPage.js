import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services/usersService/usersService";

const UserAlbumsPage = () => {
    const{postId}=useParams()

    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        usersService.getAlbumsByUserId(postId).then(({data})=>setAlbums([...data]))
    },[postId])
    return (<div>{albums.map((album)=><div>
        <div>postId:{album.userId}</div>
        <div>id:{album.id}</div>
        <div>title:{album.title}</div>

    </div>)}
    </div>);
};
export {UserAlbumsPage};