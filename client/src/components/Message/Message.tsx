/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Comment } from '../../types/comment';
import * as commentApi from '../../api/comments';

interface Props {
  comment: Comment;
}

export const Message: React.FC<Props> = ({ comment }) => {
  const {
    id,
    text,
    headCommentId,
    User,
  } = comment;
  const handleRemove = () => {
    if (!headCommentId) {
      commentApi.removeAllByHeadComment(id);
    }

    commentApi.remove(id);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">

          <div className="media-left">
            <figure className="image is-48x48">
              <img
                // eslint-disable-next-line max-len
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt="avatar"
              />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-4">{User.name}</p>
            <p className="subtitle">{User.email}</p>
            <p className="subtitle">{id}</p>
          </div>
          <button
            type="button"
            className="delete"
            onClick={() => handleRemove()}
          />
        </div>

        <div className="content">
          {text}
          <br />
          {User.homepage && (
            <a href={User.homepage}>{User.homepage}</a>
          )}
        </div>
      </div>
    </div>
  );
};
