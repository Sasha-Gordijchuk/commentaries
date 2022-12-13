import { Comment } from '../models/commentModel.js';

export const getAll = async(req, res) => {
  const result = await Comment.getAll();

  res.send(result);
};

export const getOne = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await Comment.findByPk(commentId);

  if (!findedComment) {
    res.sendStatus(404);

    return;
  }

  res.send(findedComment);
};

export const create = (req, res) => {
  const { text, userId } = req.body;

  if (!text || !userId) {
    res.sendStatus(422);

    return;
  }

  const newComment = {
    text,
    userId,
  };

  Comment.create(newComment);

  res.statusCode = 201;
  res.send(newComment);
};

export const remove = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await Comment.findByPk(commentId);

  if (!findedComment) {
    res.sendStatus(404);

    return;
  }

  await Comment.destroy(commentId);

  res.sendStatus(204);
};
