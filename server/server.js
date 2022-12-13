/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { User } from './models/userModel.js';
import { Comment } from './models/commentModel.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as commentRouter } from './routes/commentRoutes.js';

export function createServer() {
  const app = express();

  app.use(cors());
  app.use('/users', userRouter);
  app.use('/comments', commentRouter);

  User.createTable();
  Comment.createTable();

  return app;
};
