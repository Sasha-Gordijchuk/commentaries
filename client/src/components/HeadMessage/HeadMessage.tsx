/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { HeadComment } from '../../types/headComment';
import { Comment } from '../../types/comment';
import { AnswersList } from '../AnswersList';
import { Message } from '../Message';
import { AddComment } from '../AddComment';

interface Props {
  comment: Comment | HeadComment,
}

export const HeadMessage: React.FC<Props> = ({
  comment,
}) => {
  const { id, userId, text } = comment;
  const [answersIsVisible, setAnswersIsVisible] = useState<boolean>(false);
  const [addingFormIsVisible, setAddingFormIsVisible] = useState<boolean>(false);

  return (
    <div className="commentsBlock">

      <Message
        id={id}
        text={text}
        userId={userId}
        isHeadComment
      />
      <div className="commentButtons">
        <button
          className="button is-ghost"
          type="button"
          onClick={() => setAddingFormIsVisible(true)}
        >
          Reply
        </button>

        <button
          onClick={() => setAnswersIsVisible(!answersIsVisible)}
          type="button"
          className="button is-ghost"
        >
          {answersIsVisible
            ? 'Hide answers'
            : 'Show answers'}
        </button>
      </div>

      {answersIsVisible && (
        <AnswersList
          commentId={id}
        />
      )}

      {addingFormIsVisible && (
        <AddComment
          headCommentId={id}
          setAddingFormIsVisible={setAddingFormIsVisible}
        />
      )}
    </div>
  );
};
