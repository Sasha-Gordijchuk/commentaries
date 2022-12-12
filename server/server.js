/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { User } from './models/userModel.js';
import { Comment } from './models/commentModel.js';

export function createServer() {
  const app = express();

  app.use(cors());

  User.createTable();

  app.get('/', (req, res) => {
    res.end('Hello World');
  });

  app.get('/users', async(req, res) => {
    const result = await User.getAll();

    res.send(result);
  });

  app.get('/users/:userId', async(req, res) => {
    const { userId } = req.params;
    const findedUser = await User.findByPk(userId);

    if (!findedUser) {
      res.sendStatus(404);

      return;
    }

    console.log(findedUser);

    res.send(findedUser);
  });

  app.post('/users', express.json(), (req, res) => {
    const { name, email, homepage } = req.body;

    if (!name || !email) {
      res.sendStatus(422);

      return;
    }

    const newUser = {
      name,
      email,
      homepage,
    };

    User.create(newUser);
    console.log(newUser);

    res.statusCode = 201;
    res.send(newUser);
  });

  app.delete('/users/:userId', async(req, res) => {
    const { userId } = req.params;

    const deletingUser = await User.destroy(userId);

    console.log('==================');
    console.log(deletingUser);
    console.log('==================');

    res.sendStatus(204);
  });

  app.get('/comments', async(req, res) => {
    const result = await Comment.getAll();

    res.send(result);
  });

  app.get('/comments/:commentId', async(req, res) => {
    const { commentId } = req.params;
    const findedComment = await User.findByPk(commentId);

    if (!findedComment) {
      res.sendStatus(404);

      return;
    }

    console.log(findedComment);

    res.send(findedComment);
  });

  app.post('/comments', express.json(), (req, res) => {
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
    console.log(newComment);

    res.statusCode = 201;
    res.send(newComment);
  });

  app.delete('/comments/:commentId', async(req, res) => {
    const { commentId } = req.params;

    const deletingComment = await Comment.destroy(commentId);

    console.log('==================');
    console.log(deletingComment);
    console.log('==================');

    res.sendStatus(204);
  });

  return app;
};
