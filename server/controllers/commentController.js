/* eslint-disable no-console */
import { Comment } from '../models/commentModel.js';

export const getAll = async(req, res) => {
  const { headCommentId } = req.params;
  const { sortType, sortOrder } = req.query;
  let result;

  console.log(req.query);

  if (headCommentId) {
    result = await Comment.getAnswers();
  }

  if (sortType) {
    result = await Comment.getSortedComments(sortType, sortOrder);
  }

  if (!headCommentId && !sortType) {
    result = await Comment.getHeadComments(headCommentId);
  }

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
  const file = req.files.file;

  console.log(req.body);

  if (!text || !UserId) {
    res.sendStatus(422);

    return;
  }

  let newFileName;
  let newFilePath;

  if (file) {
    newFileName = encodeURI(Date.now() + '-' + file.name);
    newFilePath = `./files/${newFileName}`;

    file.mv(newFilePath, err => {
      if (err) {
        console.error(err);
      }
    });
  }

  console.log('==================');
  console.log(newFileName);
  console.log(newFilePath);
  console.log('==================');

  const newComment = {
    text,
    headCommentId: headCommentId || null,
    UserId,
    filePath: newFilePath || null,
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
