import React from 'react';
import { HeadComment } from '../../types/headComment';
import { Message } from '../Message';

interface Props {
  comments: HeadComment[],
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
