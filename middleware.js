import logger from './logger';

/**
 *
 * @param {*} request Request document
 * @param {*} _response Unused response document
 * @param {*} next Next function
 */
const requestLogger = (request, _response, next) => {
  logger.info('Method: ', request.method);
  logger.info('Path: ', request.path);
  logger.info('Body: ', request.body);
  logger.info('---: ');
  next();
};

/**
 *
 * @param {*} _request Unused request document
 * @param {*} response Response document
 */
const unknownEndpoint = (_request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

/**
 *
 * @param {*} error Error object
 * @param {*} _request Unused request document
 * @param {*} response Response document
 * @param {*} next Next function
 * @returns Error type and message
 */
const errorHandler = (error, _request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token'
    });
  }

  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
};
