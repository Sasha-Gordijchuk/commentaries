import axios from 'axios';
import { Comment } from '../types/comment';
import { SortOrder, SortType } from '../types/sortType';

const BASE_URL = 'http://localhost:8080';

export const getAll = () => {
  return axios.get<Comment[]>(`${BASE_URL}/comments`);
};

export const getAllByHeadComment = (commentId: string) => {
  return axios.get<Comment[]>(`${BASE_URL}/comments/byHead/${commentId}`);
};

export const getSortedComments = (sortType: SortType, sortOrder: SortOrder) => {
  return axios.get<Comment[]>(`${BASE_URL}/comments?sortType=${sortType}&sortOrder=${sortOrder}`);
};

export const getById = (commentId: string) => {
  return axios.get<Comment>(`${BASE_URL}/comments/${commentId}`);
};

export const add = (data: unknown) => {
  return axios.post<Comment>(`${BASE_URL}/comments`, data);
};

export const remove = (commentId: string) => {
  return axios.delete<Comment>(`${BASE_URL}/comments/${commentId}`);
};

export const removeAllByHeadComment = (commentId: string) => {
  return axios.patch<Comment[]>(`${BASE_URL}/comments/${commentId}`);
};
