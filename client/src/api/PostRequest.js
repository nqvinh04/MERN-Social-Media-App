import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5001"})

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const getAllPosts = () => API.get(`/posts/`);
export const likePost = (id, userId) => API.put(`/posts/${id}/like`, {userId: userId});
