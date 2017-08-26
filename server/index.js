import http from 'http';
import express from 'express';

import Renderer from './Renderer';

const PROD = process.env.NODE_ENV === 'production';
const app = express();

if (PROD) {
  app.use('/static', express.static('build'));
  app.get('*', Renderer);

} else {
  const DevServer = require('./DevServer').default;
  DevServer(app);
  app.get('*', Renderer);

}

const server = http.createServer(app);

server.listen(3000, () => {
  const address = server.address();
  console.log(`Listening on: localhost:${address.port}`);
});
