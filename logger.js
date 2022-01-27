//private var
var url = "http://myLog.com";
const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);
        //Raise an event
        this.emit('messageLogged', { id: 22, url: 'http://' });
    }

}

module.exports = Logger;