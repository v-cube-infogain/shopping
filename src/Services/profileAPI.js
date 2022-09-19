import axios from 'axios';

const baseURL = "https://6311c5a7f5cba498da853924.mockapi.io/vcube/api/users";

export const getUserDetailsService = (id) =>
    axios.get(`${baseURL}/${id}`);

export const updateUserDetailsService = (id, data) =>
    axios.put(`${baseURL}/${id}`, data);