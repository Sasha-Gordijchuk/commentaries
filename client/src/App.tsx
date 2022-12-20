/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import * as commentApi from './api/comments';
import 'bulma/css/bulma.css';
import './style.css';
import { HeadCommentsList } from './components/HeadCommentsList';
import { AddComment } from './components/AddComment';
import { Comment } from './types/comment';

export const App: React.FC = () => {
  const [commentsFromServer, setCommentsFromServer] = useState<Comment[]>([]);
  // const [sortingComments, setSortingComments] = useState<HeadComment[]>([]);
  const [addingFormIsVisible, setAddingFormIsVisible] = useState<boolean>(false);

  const loadHeadComments = async () => {
    const comments = await commentApi.getAll();

    setCommentsFromServer(comments.data);
  };

  useEffect(() => {
    loadHeadComments();
  }, []);

  return (
    <div className="App">
      <header className="header">
        {/* <select
          name="sorting"
          id="sorting"
        >
          <option value={SortBy.Date} onClick={handleChange}>Date</option>
          <option value={SortBy.UserName} onClick={handleChange}>UserName</option>
          <option value={SortBy.Email} onClick={handleChange}>Email</option>
        </select> */}

        <button
          onClick={() => setAddingFormIsVisible(true)}
          type="button"
        >
          Add Comment
        </button>
      </header>

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
