import React, {useEffect, useState} from 'react';
import {getUserById} from "../../../../../api/usersApi/usersApi";

const UserDetails = ({UserId}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        if (UserId) {
            getUserById(UserId).then((resp) => setUser(resp))
        }
    }, [UserId])
    let {
        id,
        name,
        username,
        email,
        phone,
        website,
    } = user;
    console.log(UserId)
    console.log(user);
    return (
        <div>
            <div>
                <div><h3>id:{id}</h3></div>
                <div><h3>name:{name}</h3></div>
                <div><h3>username:{username}</h3></div>
                <div><h3>email:{email}</h3></div>
                {/*<div><h3>address:</h3>*/}
                {/*    <div><h4>street:{street}</h4></div>*/}
                {/*    <div><h4>suite:{suite}</h4></div>*/}
                {/*    <div><h4>city:{city}</h4></div>*/}
                {/*    <div><h4>zipcode:{zipcode}</h4></div>*/}
                {/*    <div><h4>geo:</h4>*/}
                {/*        <div><h5>lat:{lat}</h5></div>*/}
                {/*        <div><h5>lng:{lng}</h5></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div><h3>phone:{phone}</h3></div>
                <div><h3>website:{website}</h3></div>
                {/*<div><h3>company:</h3>*/}
                {/*    <div><h4>{company.name}</h4></div>*/}
                {/*    <div><h4>{company.catchPhrase}</h4></div>*/}
                {/*    <div><h4>{company.bs}</h4></div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export {UserDetails};