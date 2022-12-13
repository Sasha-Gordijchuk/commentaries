/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { User } from './models/userModel.js';
import { Comment } from './models/commentModel.js';
import * as userController from './controllers/userController.js';
import * as commentController from './controllers/commentConroller.js';

export function createServer() {
  const app = express();

  app.use(cors());

  User.createTable();
  Comment.createTable();

  app.get('/', (req, res) => {
    res.end('Hello World');
  });

  app.get('/users', userController.getAll);

  app.get('/users/:userId', userController.getById);

  app.post('/users', express.json(), userController.create);

  app.delete('/users/:userId', userController.remove);

  app.get('/comments', commentController.getAll);

  app.get('/comments/:commentId', commentController.getOne);

  app.post('/comments', express.json(), commentController.create);

  app.delete('/comments/:commentId', commentController.remove);

  return app;
};
