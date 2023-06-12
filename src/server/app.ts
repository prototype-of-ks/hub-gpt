import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(() => {});

app.get('/', () => {});
