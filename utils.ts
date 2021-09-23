/**
 *
 * @param text Parameter of unknown type
 * @returns True if type is String, else a new instance of String
 */
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

/**
 *
 * @param date String parameter to check
 * @returns Boolean of true if parameter is date, else false
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

/**
 *
 * @param number Parameter of unknown type
 * @returns True if type is Number, else a new instance of Number
 */
const isNumber = (number: unknown): number is number => {
  return typeof number === 'number' || number instanceof Number;
};

/**
 *
 * @param date Parameter of unknown type
 * @returns Parameter if true, else throws an error
 */
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

export { isString, isDate, isNumber, parseDate };
