var url = "http://my.logger.com/log";

function log(message) {
    // send an http request
    console.log(message);
}

module.exports.log = log;
// log(module);
