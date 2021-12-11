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
console.log(chalk.blue('Hello world!'));