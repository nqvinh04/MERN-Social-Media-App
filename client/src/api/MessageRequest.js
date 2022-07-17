import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5001'});

export const getMessage = (id) => API.get(`/message/${id}`);
export const addMessage = (data) => API.post(`/message/`, data);
