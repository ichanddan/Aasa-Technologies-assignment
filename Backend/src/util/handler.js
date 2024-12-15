/*
 * Error Handling methods below
 *
 */
/**
 * Handles a successful API response
 * @param {Object} res - Express response object
 * @param {string} message - Response message
 * @param {Object|Array} [data] - Optional data to be sent in the response
 */
const handleSuccess = (res, statusCode = 200, message, data = null) => {
  const response = {
    status: "success",
    message,
  };

  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

/**
 * Handles an error API response
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
 */
const handleError = (res, statusCode = 400, message) => {
  return res.status(statusCode).json({
    status: "error",
    message,
  });
};
const handleConflict = (res, statusCode = 409, message) => {
  return res.status(statusCode).json({
    status: "Conflict",
    message,
  });
};

/**
 * Handles an internal server error API response
 * @param {Object} res - Express response object
 * @param {string} message - Error message
 */
const handleInternalServerError = (res, message = "Internal Server Error") => {
  return res.status(500).json({
    status: "error",
    message,
  });
};

export default {
  handleSuccess,
  handleError,
  handleConflict,
  handleInternalServerError,
};
