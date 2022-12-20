/* eslint-disable no-console */
import { Comment } from '../models/commentModel.js';

export const getAll = async(req, res) => {
  const { headCommentId } = req.params;
  const result = await Comment.getAll(headCommentId);

  res.send(result);
};

export const getOne = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await Comment.getById(commentId);

  if (!findedComment) {
    res.sendStatus(404);

    return;
  }

  res.send(findedComment);
};

export const create = (req, res) => {
  const { text, UserId, headCommentId } = req.body;

  console.log(req.body);

  if (!text || !UserId) {
    res.sendStatus(422);

    return;
  }

  const newComment = {
    text,
    headCommentId,
    UserId,
  };

  Comment.add(newComment);

  res.statusCode = 201;
  res.send(newComment);
};

export const remove = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await Comment.getById(commentId);

  if (!findedComment) {
    res.sendStatus(404);

    return;
  }

  Comment.remove(commentId);

  res.sendStatus(204);
};

export const removeAllByHeadComment = (req, res) => {
  const { headCommentId } = req.params;

  Comment.removeAllByHeadComment(headCommentId);

  res.sendStatus(204);
};
