import React from 'react';
import { HeadComment } from '../../types/headComment';
import { HeadMessage } from '../HeadMessage';

interface Props {
  comments: HeadComment[],
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
