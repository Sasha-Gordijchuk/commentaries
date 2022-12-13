import React from 'react';
import { Comment } from '../../types/comment';
import { Message } from '../Message';

interface Props {
  comments: Comment[],
}

export const HeadCommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <Message
          key={comment.id}
          comment={comment}
        />
      ))}
    </>
  );
};
