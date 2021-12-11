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
console.log(ans);
fs.readdir("./",(error,result)=>{
    if (error) console.log(error);
    else console.log(result)
});

var http= require("http");
var server = http.createServer(function(request, response){
    // response.write("Welcome to server");
    // response.end();
    
//listen to a port while server is running

//when a get req send to this server through a port 3333
//server responds back with a msg

if (request.url==="/"){
    response.write("Welcome");
    response.end();
}
if (request.url==="/login"){
    response.write("Login Page");
    response.end();
}
else{
    response.write("Doesnt exist")
    response.end();
}


});
server.listen(33321);
console.log("3332d1")