const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //send HTTP request
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;