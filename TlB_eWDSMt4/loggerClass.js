const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        // raise event
        this.emit("messageLogged", message);
    }
}

module.exports = Logger;
