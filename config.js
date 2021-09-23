require('dotenv').config();

// Reading in server/API port from environment variable, if applicable
const PORT = process.env.PORT;
// Reading in MongoDB URI from environment variable, if applicable
const MONGODB_URI =
  process.env.NODE_ENV === 'dev'
    ? process.env.DEV_MONGODB_URI
    : process.env.MONGODB_URI;

export default { MONGODB_URI, PORT };
