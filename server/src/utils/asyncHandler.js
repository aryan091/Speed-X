/**
 * Creates an asynchronous handler function that wraps the provided request handler function.
 *
 * @param {function} requestHandler - The function to be wrapped. It should accept three parameters: req, res, and next.
 * @return {function} The wrapped function that handles the request asynchronously.
 */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
  };
  
  export default asyncHandler;
  