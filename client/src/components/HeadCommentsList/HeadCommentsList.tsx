import React from 'react';
import { Comment } from '../../types/comment';
import { HeadMessage } from '../HeadMessage';

interface Props {
  comments: Comment[],
}

export const HeadCommentsList: React.FC<Props> = ({
  comments,
}) => {
  return (
    <>
      {comments.map(comment => (
        <HeadMessage
          key={comment.id}
          comment={comment}
        />
      ))}
    </>
  );
};
