import { HeadComment } from '../models/headCommentModel.js';

export const getAll = async(req, res) => {
  const result = await HeadComment.getAll();

  res.send(result);
};

export const getOne = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await HeadComment.getById(commentId);

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

  HeadComment.add(newComment);

  res.statusCode = 201;
  res.send(newComment);
};

export const remove = async(req, res) => {
  const { commentId } = req.params;
  const findedComment = await HeadComment.getById(commentId);

  if (!findedComment) {
    res.sendStatus(404);

    return;
  }

  await HeadComment.destroy(commentId);

  res.sendStatus(204);
};
