import axios from 'axios';



 
const http = (url: string, method: string, data: any) => {
    return axios({
        url,
        method,
        data,
    });
};

// get all post
export const getAllPost = async () => {
    //return await http('https://jsonplaceholder.typicode.com/posts', 'GET', null);
    return await http('http://18.159.246.168:8090/api/v1/pets', 'GET', null);
};

// get post by id
export const getPost = (id: number) => {
    return http(`https://jsonplaceholder.typicode.com/posts/${id}`, 'GET', null);
};

// create post
export const createPost = (data: any) => {
    console.log(data);
    return http('https://jsonplaceholder.typicode.com/posts', 'POST', data);
};

// delete post
export const deletePost = (id: number) => {
    return http(`https://jsonplaceholder.typicode.com/posts/${id}`, 'DELETE', null);
};


export default {
    getAllPost,
    getPost,
    createPost,
    deletePost,
}



