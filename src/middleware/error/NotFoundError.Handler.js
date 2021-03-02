import express from 'express';
import NotFoundError from '../../component/exception/NotFound.Error';

const app = express();

const notFoundHandler = (req, res, next) => {
  throw new NotFoundError('없는 API입니다.');
};

export default notFoundHandler;
