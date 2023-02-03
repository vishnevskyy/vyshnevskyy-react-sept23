import React, {Component} from 'react';
import {getAllServices} from "../../api/userService";
import {User} from "./User/User";

class Users extends Component{
    constructor() {
        super();
        this.state={users:[]}
    }
    componentDidMount() {
        getAllServices.getAllUsers().then(({data})=>this.setState({users:data}))
    }
render() {
        return(
            <div>
                {this.state.users.map(user=><User key={user.id} user={user}/>)}
            </div>
        )
}
}

export {Users};