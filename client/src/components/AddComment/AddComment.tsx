/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';

interface Props {
  headCommentId: string | null;
  setAddingFormIsVisible: (value: boolean) => void
}

export const AddComment: React.FC<Props> = ({ headCommentId, setAddingFormIsVisible }) => {
  console.log(headCommentId);

  return (
    <div className="modal is-active is-clipped">
      <div className="modal-background"></div>
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
              <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">Email*</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Homepage</label>
            <div className="control">
              <input className="input" type="url" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message" className="label">Message*</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea" />
            </div>
          </div>

        </section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button is-success"
            onClick={() => setAddingFormIsVisible(false)}
          >
            Add Comment
          </button>
          <button
            type="button"
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

{ /* <div className="field">
          <label htmlFor="name" className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="username" className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label htmlFor="email" className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label htmlFor="subject" className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message" className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="button" className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button type="button" className="button is-link is-light">Cancel</button>
          </div>
        </div> */ }
