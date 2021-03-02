import express from 'express';
import lotto from './api/lotto/router';

const app = express();

app.use('/lotto', lotto);

export default app;
