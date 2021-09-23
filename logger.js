/**
 *
 * @param  {...any} params Info text to output into logger middleware
 */
const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') console.log(...params);
};

/**
 *
 * @param  {...any} params Error text to output into logger middleware
 */
const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') console.log(...params);
};

module.exports = {
  info,
  error
};
