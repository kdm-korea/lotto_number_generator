import http from 'http';
import express from 'express';
import './setting/env.platform';
import api from './router';
import db from './config/mariadb.config';
import { CustomErrorHandler, NotFoundErrorHandler } from './middleware/error';

db.sequelize
  .sync()
  .then(() => {
    console.log('🟢 DB Connect Success!!!');
  })
  .catch((err) => {
    console.log(`❌ DB unable to connect : ${err}`);
  });

const app = express();

app.use(express.json());

app.use('/api', api);

app.use(NotFoundErrorHandler);

app.use(CustomErrorHandler);

http.createServer(
  app.listen(process.env.PORT || 8080, () => {
    console.log('🟢 Server Running!!!');
  })
);
