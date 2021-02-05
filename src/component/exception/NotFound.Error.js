import CustomError from './Custom.Error';

class NotFoundError extends CustomError {
  constructor(message) {
    super(404, message || 'Not Found Error');
  }
}

export default NotFoundError;
