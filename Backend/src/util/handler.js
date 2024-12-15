/*
 * Error Handling methods below
 *
 */

const HandleSuccess = (res, data) => {
  res.status(200).json(data);
  res.end();
};

const HandleError = (res, message) => {
  res.status(202).json({
    error: message,
  });
  res.end();
};

const UnauthorizedError = (res) => {
  res.status(401).json({
    error: "Unauthorized API call.",
  });
  res.end();
};

const HandleServerError = (res, req, err) => {
  /*
   * Can log the error data into files to recreate and fix issue.
   * Hiding stack stace from users.
   */
  const errLog = {
    method: req.method,
    url: req.originalUrl,
    params: req.params,
    query: req.query,
    post: req.body,
    error: err,
  };
  // Temporary console log for debug mode
  console.log(errLog);
  res.status(500).json({
    error: "Something went wrong. Please contact support team.",
  });
};

export default {
  HandleSuccess,
  HandleError,
  UnauthorizedError,
  HandleServerError,
};
