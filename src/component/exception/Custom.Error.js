class CustomError extends Error {
  constructor(status, message) {
    super(status, message);
    Error.captureStackTrace(this, CustomError);
    this.status = status || 500;
    this.message = message || 'Not custom error message';
  }
}

export default CustomError;
