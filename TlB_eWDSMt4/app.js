function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Eden");

console.log(module);

// custom modules
const logger = require("./logger");
logger.log("message");

// path module
const path = require("path");
var pathObject = path.parse(__filename);
console.log(pathObject);

// OS module
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// fs module
//      always prefer using asynchrnous functions
const fs = require("fs");
const filesSync = fs.readdirSync("./");
console.log(filesSync);

fs.readdir("./", function (err, files) {
    if (err) console.log("Error", err);
    else console.log("Result", files);
});

// events module
const EventEmitter = require("events");
const emitter = new EventEmitter();

//      register a listener
emitter.on("messageLogged", function () {
    console.log("Listener called");
});

//      raise an event
emitter.emit("messageLogged"); // emit = make a noise or produce some output

// event args
//      when an event is raised, it can have arguments
emitter.on("userJoined", (user) => {
    console.log(`${user} has joined`);
});
emitter.emit("userJoined", "Eden");

//      raise logging (data: message) event
emitter.on("logging", (data) => {
    console.log(data);
});
emitter.emit("logging", { id: 1, url: "http://" });

console.log("----------------------------------------");

// extending event emitter
const Logger = require("./loggerClass");
const loggerClass = new Logger();
loggerClass.on("messageLogged", (data) => {
    console.log("Listener called", data);
});
loggerClass.log("message in Logger class");

// http module
const http = require("http");
const server = http.createServer((req, res) => {
    // the server is an event emitter
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    } else if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
// server.on("connection", (socket) => {
//     console.log("New connection");
// });
server.listen(1997);
console.log("Listening on port 1997");
