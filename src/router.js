import express from 'express';
import lotto from './api/lotto/router';
import user from './api/user/router';

const app = express();

app.use('/lotto', lotto);

app.use('/user', user);

export default app;
