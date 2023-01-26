import './App.css';
import {Users} from "./components/Users/Users";
import {UserForm} from "./components/UserForm/UserForm";
import {useEffect, useState} from "react";
import {UsersService} from "./api/UsersApi/UsersApi";
function App() {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        UsersService.getAll().then(({data})=>setUsers([...data]));
    },[])

  return (

    <div className="App">
        <UserForm setUsers={setUsers}/>
        <hr/>
      <Users users={users}/>
    </div>
  );
}

export default App;
