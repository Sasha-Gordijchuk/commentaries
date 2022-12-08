/* eslint-disable no-console */
'use strict';

import { createServer } from './server.js';

const PORT = process.env.PORT || 8080;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
