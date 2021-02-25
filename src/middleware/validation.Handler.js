import { validationResult } from 'express-validator';
import NotFoundError from '../component/exception/NotFound.Error';

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return next(new NotFoundError(errors.array()));
  };
};

export default validate;
