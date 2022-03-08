import axios from 'axios';

const url = 'http://localhost:3003/users';


export const getUsers = async (usn) => {
    // id = id || '';
    let users = window.localStorage.getItem("users")
    users = users && JSON.parse(users) || []
    return users
    // return await axios.get(`${url}/${id}`);

}
export const addUser = async (user) => {
    let users = window.localStorage.getItem("users")
    users = users && JSON.parse(users) || [];
    users.push(user)
    window.localStorage.setItem("users", JSON.stringify(users))
    return users
}

export const editUser = async (usn) => {
    // return await axios.put(`${url}/${usn}`, user)
    let users = window.localStorage.getItem("users")
    users = users && JSON.parse(users) || [];
    users.push(usn)
    window.localStorage.setItem("users", JSON.stringify(users))
    return users

}

export const deleteUser = async (user) => {
    // return await axios.delete(`${url}/${usn}`)
    let users = window.localStorage.getItem("users")
    // users = users && JSON.parse(users) || [];
    users.delete(user)
    window.localStorage.setItem("users", JSON.stringify(users))
    return users
}


