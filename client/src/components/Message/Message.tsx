import React, { useEffect, useState } from 'react';
import { Comment } from '../../types/comment';
import { User } from '../../types/user';
import * as userApi from '../../api/users';

interface Props {
  comment: Comment,
}

const userPlaceholder: User = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  homepage: 'johndoe.com',
};

export const Message: React.FC<Props> = ({ comment }) => {
  const { userId, text } = comment;
  const [userInfo, setUserInfo] = useState<User>(userPlaceholder);

  const loadUser = async (id: string) => {
    const findedUser = await userApi.getById(id);

    setUserInfo(findedUser.data);
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
          </div>
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
