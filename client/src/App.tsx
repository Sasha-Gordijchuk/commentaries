/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import * as headCommentApi from './api/headComments';
import 'bulma/css/bulma.css';
import './style.css';
import { HeadCommentsList } from './components/HeadCommentsList';
import { HeadComment } from './types/headComment';
import { AddComment } from './components/AddComment';

export const App: React.FC = () => {
  const [commentsFromServer, setCommentsFromServer] = useState<HeadComment[]>([]);
  const [addingFormIsVisible, setAddingFormIsVisible] = useState<boolean>(false);

  const loadHeadComments = async () => {
    const comments = await headCommentApi.getAll();

    setCommentsFromServer(comments.data);
  };

  useEffect(() => {
    loadHeadComments();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => setAddingFormIsVisible(true)}
        type="button"
      >
        Add Comment
      </button>

      <HeadCommentsList
        comments={commentsFromServer}
      />

      {addingFormIsVisible && (
        <AddComment
          headCommentId={null}
          setAddingFormIsVisible={setAddingFormIsVisible}
        />
      )}
    </div>
  );
};
