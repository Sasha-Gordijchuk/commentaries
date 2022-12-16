/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { User } from '../../types/user';
import * as userApi from '../../api/users';
import * as commentApi from '../../api/comments';
import * as headCommentApi from '../../api/headComments';

interface Props {
  id: string;
  text: string;
  userId: string;
  isHeadComment: boolean;
}

const userPlaceholder: User = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  homepage: 'johndoe.com',
};

export const Message: React.FC<Props> = ({
  id,
  text,
  userId,
  isHeadComment,
}) => {
  const [userInfo, setUserInfo] = useState<User>(userPlaceholder);

  const loadUser = async (user: string) => {
    const findedUser = await userApi.getOne(user);

    setUserInfo(findedUser.data);
  };

  const handleRemove = () => {
    // eslint-disable-next-line no-console
    console.log('handle remove');

    if (isHeadComment) {
      console.log('isHead');
      headCommentApi.remove(id);
      commentApi.removeAllByHeadComment(id);
    } else {
      commentApi.remove(id);
    }
  };

  useEffect(() => {
    if (userId) {
      loadUser(userId);
    }
  }, [userId]);

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
            <p className="title is-4">{userInfo.name}</p>
            <p className="subtitle">{userInfo.email}</p>
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
          {userInfo.homepage && (
            <a href={userInfo.homepage}>{userInfo.homepage}</a>
          )}
        </div>
      </div>
    </div>
  );
};
