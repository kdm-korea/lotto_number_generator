import CustomError from './Custom.Error';

class ConflictError extends CustomError {
  constructor(message) {
    super(409, message || 'Conflict Error');
  }
}

export default ConflictError;
