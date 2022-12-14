import React from 'react';
import { HeadComment } from '../../types/headComment';
import { Comment } from '../../types/comment';
import { AnswersList } from '../AnswersList';
import { Message } from '../Message';

interface Props {
  comment: Comment | HeadComment,
}

export const HeadMessage: React.FC<Props> = ({ comment }) => {
  const { id, userId, text } = comment;

  return (
    <div className="commentsBlock">
      <Message
        text={text}
        userId={userId}
      />

      <AnswersList
        commentId={id}
      />
    </div>
  );
};
