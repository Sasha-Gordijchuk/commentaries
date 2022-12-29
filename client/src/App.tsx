/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import * as commentApi from './api/comments';
import 'bulma/css/bulma.css';
import './style.css';
import { HeadCommentsList } from './components/HeadCommentsList';
import { AddComment } from './components/AddComment';
import { Comment } from './types/comment';
import { SortOrder, SortType } from './types/sortType';

export const App: React.FC = () => {
  const [commentsFromServer, setCommentsFromServer] = useState<Comment[]>([]);
  const [addingFormIsVisible, setAddingFormIsVisible] = useState<boolean>(false);
  const [sortingType, setSortingType] = useState<SortType>(SortType.Date);
  const [sortingOrder, setSortingOrder] = useState<SortOrder>('ASC');

  const loadHeadComments = async () => {
    const comments = await commentApi.getAll();

    setCommentsFromServer(comments.data);
  };

  const handleTypeChange = (event: any) => {
    setSortingType(event.target.value);
  };

  const handleOrderChange = (event: any) => {
    setSortingOrder(event.target.value);
  };

  const handleSubmit = async () => {
    const comments = await commentApi.getSortedComments(sortingType, sortingOrder);

    setCommentsFromServer(comments.data);
  };

  useEffect(() => {
    loadHeadComments();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <form>
          <select value={sortingType} onChange={handleTypeChange}>
            <option value={SortType.Date}>Date</option>
            <option value={SortType.UserName}>UserName</option>
            <option value={SortType.Email}>Email</option>
          </select>

          <select value={sortingOrder} onChange={handleOrderChange}>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>

          <button
            type="button"
            onClick={() => handleSubmit()}
          >
            Sort
          </button>
        </form>

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

      {
        addingFormIsVisible && (
          <AddComment
            headCommentId={null}
            setAddingFormIsVisible={setAddingFormIsVisible}
          />
        )
      }
    </div>
  );
};
