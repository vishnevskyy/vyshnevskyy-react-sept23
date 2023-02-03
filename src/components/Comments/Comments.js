import React, {Component} from 'react';
import {getAllServices} from "../../api/userService";
import {Comment} from "./Comment/Comment";


class Comments extends Component{

    constructor() {
        super();
        this.state={comments:[]};
    }
    componentDidMount() {
        getAllServices.getAllComments().then(({data})=>this.setState({comments: data}))
    }

    render(){
        console.log(this.state)
return(
    <div>
        {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
    </div>
)
    }
}

export {Comments};