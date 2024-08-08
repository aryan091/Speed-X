class ApiError extends Error {

  /**
   * Creates a new ApiError instance.
   *
   * @param {number} statusCode - The HTTP status code for the error.
   * @param {string} [message='Something went wrong'] - The error message.
   * @param {Array} [errors=[]] - An array of error details.
   * @param {string} [stack=''] - The stack trace of the error.
   */
    constructor(statusCode, message = 'Something went wrong', errors = [], stack = '') {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.data = null;
      this.success = false;
      this.errors = errors;
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;
  