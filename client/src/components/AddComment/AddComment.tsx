/* eslint-disable no-console */
import React, { useRef } from 'react';
import * as headCommentApi from '../../api/headComments';
import * as commentApi from '../../api/comments';
import * as userApi from '../../api/users';

interface Props {
  headCommentId: string | null;
  setAddingFormIsVisible: (value: boolean) => void
}

export const AddComment: React.FC<Props> = ({
  headCommentId,
  setAddingFormIsVisible,
}) => {
  const userNameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const homepageField = useRef<HTMLInputElement>(null);
  const messageField = useRef<HTMLTextAreaElement>(null);

  console.log(headCommentId);

  const findUser = async (param: string, value = '') => {
    try {
      const user = (await userApi.getOne(value, param)).data;

      return user;
    } catch {
      return null;
    }
  };

  const handleSubmit = async () => {
    const newUser = {
      name: userNameField.current?.value,
      email: emailField.current?.value,
      homepage: homepageField.current?.value,
    };

    let user = await findUser('name', newUser.name);
    let newComment;

    if (!user) {
      await userApi.add(newUser);
      user = await findUser('name', newUser.name);
    }

    if (user) {
      newComment = {
        text: messageField.current?.value,
        userId: user.id,
        headCommentId,
      };

      if (newComment.headCommentId) {
        console.log(newComment);
        commentApi.add(newComment);
      } else {
        console.log(newComment);
        headCommentApi.add(newComment);
      }
    }

    setAddingFormIsVisible(false);
  };

  return (
    <div className="modal is-active is-clipped">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">New Comment</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setAddingFormIsVisible(false)}
          />
        </header>
        <section className="modal-card-body">

          <div className="field">
            <label htmlFor="username" className="label">Username*</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Username"
                ref={userNameField}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </div>
            {/* <p className="help is-success">This username is available</p> */}
          </div>

          <div className="field">
            <label htmlFor="email" className="label">Email*</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                ref={emailField}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Homepage</label>
            <div className="control">
              <input
                className="input"
                type="url"
                placeholder="Text input"
                ref={homepageField}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message" className="label">Message*</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your comment"
                ref={messageField}
              />
            </div>
          </div>

        </section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button is-success"
            onClick={() => handleSubmit()}
          >
            Add Comment
          </button>
          <button
            type="submit"
            className="button"
            onClick={() => setAddingFormIsVisible(false)}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
