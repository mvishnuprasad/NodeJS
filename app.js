function greet(name){
console.log(`Hello ${name}`);
}

greet("Vishnu");
console.log(`Process Platform ${process.platform}`)
console.log(`Process Version ${process.version}`)
console.log(`Process working dir ${process.cwd()}`)

//Console is a part of window object in browser and here in 
//node it is a part of global object
var exportedModule = require("./messenger");
exportedModule.printer("Vishnu from another module");
const chalk = require('chalk');
console.log(chalk.yellow('Hello my world!'));
const os = require("os");
console.log(os.homedir());
console.log(os.platform());
const EventEmitter = require("events");
const events = new EventEmitter();

events.on("eventName",()=>{
    console.log("Raining");
})
events.on("event2",()=>{
    console.log("Event  num 2");
})
events.emit("event2");
events.emit("eventName");
var fs = require("fs");
var ans = fs.readdirSync("./");
console.log(ans)