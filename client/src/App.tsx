/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import * as userApi from './api/users';
import * as commentApi from './api/comments';
import 'bulma/css/bulma.css';
import './App.css';
import { User } from './types/user';
import { Comment } from './types/comment';
import { HeadCommentsList } from './components/HeadCommentsList';

export const App: React.FC = () => {
  const [usersFromServer, setUsersFromServer] = useState<User[]>([]);
  const [commentsFromServer, setCommentsFromServer] = useState<Comment[]>([]);

  const loadUsers = async () => {
    const users = await userApi.getAll();

    setUsersFromServer(users.data);
  };

  const loadComments = async () => {
    const comments = await commentApi.getAll();

    setCommentsFromServer(comments.data);
  };

  // const addComment = (data: unknown) => {
  //   console.log('addComment');

  //   commentApi.add(data);
  // };

  useEffect(() => {
    loadUsers();
    loadComments();
  }, []);

  console.log(usersFromServer);
  console.log(commentsFromServer);

  return (
    <div className="App">
      <HeadCommentsList
        comments={commentsFromServer}
      />
    </div>
  );
};
