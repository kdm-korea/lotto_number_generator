import CustomError from './Custom.Error';

class BadRequestError extends CustomError {
  constructor(message) {
    super(400, message || 'Bad Request Error');
  }
}

export default BadRequestError;
