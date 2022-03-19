
// const logger = require('./logger');

// logger.log('message');

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);
