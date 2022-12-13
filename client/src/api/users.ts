import axios from 'axios';
import { User } from '../types/user';

const BASE_URL = 'http://localhost:8080';

export const getAll = () => {
  return axios.get<User[]>(`${BASE_URL}/users`);
};

export const getById = (userId: string) => {
  return axios.get<User>(`${BASE_URL}/users/${userId}`);
};

export const add = (data: unknown) => {
  return axios.post<User>(`${BASE_URL}/users`, data);
};

export const remove = (userId: string) => {
  return axios.delete<User>(`${BASE_URL}/users/${userId}`);
};
