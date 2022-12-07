'use strict';

import { createServer } from './server.js';

const PORT = process.env.PORT || 8080;

createServer()
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${PORT}`);
  });
