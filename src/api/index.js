import axios from 'axios';

// const url = 'http://localhost:5000/posts';

// const url ="https://cyberlife-project.herokuapp.com/posts";
const API = axios.create({ baseURL: 'https://cyberlife-project.herokuapp.com' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  
  export const fetchPost = (title) => API.get(`/posts/${title}`);
  export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
  export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
  export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
  export const createPost = (newPost) => API.post('/posts', newPost);
  export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
  export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
  export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
  export const deletePost = (id) => API.delete(`/posts/${id}`);
  
  export const signIn = (formData) => API.post('/user/signin', formData);
  export const signUp = (formData) => API.post('/user/signup', formData);