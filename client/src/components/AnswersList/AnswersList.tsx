/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Comment } from '../../types/comment';
import * as commentsApi from '../../api/comments';
import { Message } from '../Message';

interface Props {
  commentId: string;
}

export const AnswersList: React.FC<Props> = ({ commentId }) => {
  const [answersFromServer, setAnswersFromServer] = useState<Comment[]>([]);

  const loadAnswers = async (id: string) => {
    const answers = await commentsApi.getAllByHeadComment(id);

    setAnswersFromServer(answers.data);
  };

  useEffect(() => {
    loadAnswers(commentId);
  }, [commentId]);

  return (
    <>
      {answersFromServer.map(answer => (
        <Message
          key={answer.id}
          text={answer.text}
          userId={answer.userId}
        />
      ))}
    </>
  );
};
