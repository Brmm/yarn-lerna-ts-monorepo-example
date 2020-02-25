import * as http from 'http';
import express, { Router, Request, Response } from 'express';
import { getRandomBytes } from 'common';

const app = express();

app.disable('x-powered-by');
app.enable('etag');

const router = Router();
router.get('/test', (_req: Request, res: Response) => {
  const randomBytes = getRandomBytes();
  return res.status(200).json({ randomBytes });
});

app.use(router)

const server = http.createServer(app);
server.listen(1337, () => {
  console.log('server running on http://localhost:1337')
});
