const LoggerModule = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http=require('http');

/******************** Test Http Module  ********************/
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write('Hello ....');
        response.end();
    }
    if(request.url==='/api/courses'){
        response.write(JSON.stringify([1,2,3]));
        response.end();
    }
    
});

server.listen(3000);
console.log('Listening to port 3000 ...');

/******************** Test Event Module Class ********************/
const logger=new LoggerModule();
//Add listenter
logger.on('messageLogged',function(arg){
console.log('Listenner Called',arg);
});

logger.log('My message');

// emitter.on('messageLogging',(args)=>{
// console.log('Logging.. ',args);
// });


/******************** Test file system module  ********************/
//sync read directory
const files = fs.readdirSync('./');
console.log(files);

//Async read directory (recommended)
fs.readdir('.ss', function (err, result) {
    if (err)
        console.log('Error', err);
    else
        console.log('Result', result);
});

/**********Test os module ********************/
var freeMem=os.freemem();
var totalMem=os.totalmem();
console.log(`Free Memory ${freeMem}`);
console.log(`Total Memory ${totalMem}`);

/******************** Test path module ********************/
var pathObj=path.parse(__filename);
console.log(pathObj);

/******************** Test custom module ********************/
LoggerModule.log('Custom Module : My message');