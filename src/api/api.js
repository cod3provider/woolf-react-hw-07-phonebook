import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://65f5bb4341d90c1c5e0a0e4c.mockapi.io/contacts"
});
