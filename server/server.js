/* eslint-disable no-console */
import express from 'express';

export function createServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send({
      'text': 'server is running',
    });
  });

  return app;
};
