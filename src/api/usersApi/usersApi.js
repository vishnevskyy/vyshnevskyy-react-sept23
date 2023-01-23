const getUsers=()=>fetch('https://jsonplaceholder.typicode.com/users/').then(resp=>resp.json());
const getUserById=(id)=> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.json())
};
export {getUsers,getUserById}