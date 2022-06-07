import axios from 'axios';

const url = 'https://api-memories.herokuapp.com/api/v1/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (postId, updatedPost) => axios.patch(`${url}/${postId}`, updatedPost);

export const deletePost = (postId) => axios.delete(`${url}/${postId}`);
