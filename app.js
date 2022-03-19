
// const logger = require('./logger');

// logger.log('message');

// Using Path Module
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// Using os module
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Free Memory: ${freeMemory}`);
// console.log(`Total Memory: ${totalMemory}`);

// Using the fs module of fs module
// Syncrinous Version
// const fs = require('fs');

// const files = fs.readdirSync('./')
// console.log(files)

// Asycrinous Version of fs module
// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });


// Using the EventEmitter module 
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});

logger.log('message');
