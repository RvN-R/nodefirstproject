
const logger = require('./logger');

logger.log('message');

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
