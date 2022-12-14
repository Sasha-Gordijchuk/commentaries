import axios from 'axios';
import { HeadComment } from '../types/headComment';

const BASE_URL = 'http://localhost:8080';

export const getAll = () => {
  return axios.get<HeadComment[]>(`${BASE_URL}/headComments`);
};

export const getById = (commentId: string) => {
  return axios.get<HeadComment>(`${BASE_URL}/headComments/${commentId}`);
};

export const add = (data: unknown) => {
  return axios.post<HeadComment>(`${BASE_URL}/headComments`, data);
};

export const remove = (commentId: string) => {
  return axios.delete<HeadComment>(`${BASE_URL}/headComments/${commentId}`);
};
