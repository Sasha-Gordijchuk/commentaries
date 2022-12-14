/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import * as headCommentApi from './api/headComments';
import 'bulma/css/bulma.css';
import './style.css';
import { HeadCommentsList } from './components/HeadCommentsList';
import { HeadComment } from './types/headComment';

export const App: React.FC = () => {
  const [commentsFromServer, setCommentsFromServer] = useState<HeadComment[]>([]);

  const loadHeadComments = async () => {
    const comments = await headCommentApi.getAll();

    setCommentsFromServer(comments.data);
  };

  useEffect(() => {
    loadHeadComments();
  }, []);

  return (
    <div className="App">
      <HeadCommentsList
        comments={commentsFromServer}
      />
    </div>
  );
};
