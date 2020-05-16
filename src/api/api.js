import * as axios from "axios";

const instance = axios.create({
baseURL: "https://jsonplaceholder.typicode.com/",
//withCredentials: true,
//   headers: {
//     "API-KEY": "d0aff467-e9da-472a-b16b-a2e5b966588b"
//   }
});

export const postsAPI = {
    getPosts(){
        return instance.get('posts')
    }
}
export const usersAPI = {
    getUsers(){
        return instance.get('users')
    }
}
export const toDoosAPI = {
    getToDoos(){
        return instance.get('todos')
    }
}