import { getComments } from './api/comments';
import React from 'react';
import './App.css';

const foo = async () => {
  const res = await getComments();

  console.log(res.data);

  return res.data;
};

foo();

export const App: React.FC = () => (
  <div className='App'>
    123
  </div>
);
