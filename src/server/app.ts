import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { routes } from './routes';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));

for (const { method, path, handler } of routes) {
  app[method](path, handler);
}

app.listen(8888, () => {
  console.log(`Your app ruuning at http://localhost:8888`);
});