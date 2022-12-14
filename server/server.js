/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import { User } from './models/userModel.js';
import { Comment } from './models/commentModel.js';
import { HeadComment } from './models/headCommentModel.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as headCommentRouter } from './routes/headCommentRoutes.js';
import { router as commentRouter } from './routes/commentRoutes.js';

export function createServer() {
  const app = express();

  app.use(cors());
  app.use('/users', userRouter);
  app.use('/headComments', headCommentRouter);
  app.use('/comments', commentRouter);

  User.createTable();
  HeadComment.createTable();
  Comment.createTable();

  return app;
};
