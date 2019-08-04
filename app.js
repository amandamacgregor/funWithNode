//first thing's first..

// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// sayHello('Amanda')
// console.log(window) gives an error

//Modules:
//OS, FS, Events, HTTP

// console.log() global object. Global scope, can access anywhere, any file
// setTimeout() also global. Sets a timeout based on timeframe we give it.
// clearTimeout() also global. 

// setInterval() also global. 
// clearInterval() also global.  Research these in more depth outside of this tutorial.

// window - where we can view in broswer. present global scope. all vairables and functions that are defined globally.JSobject where all above functions can be accessed.
    // window.console.log = how console.log() translates behind the scenes
    
//In Node, we have global instead of window    
// var message = '' // NOT global.
// global.console.log() - this is how the computer reads console.log(), but we don't need to type it all out.
// console.log(global.message) //this throws undefined, even though we are pinging global as we would expect in node.
// 

// var sayHello = function() //client-side JS that we run inside of browsers, when we declare a function it's added to global scope and available via the window object.
// Since JS is broken out into multiple files, and functions are global in scope, there's a chance this function name is used more than once.
//So, newest function with the same name will be the default; what actually gets run.
// So, we use modules and declare these more locally in node. Scoped within their module. 'Private', by OOP standards.
// console.log(module) //console.log(global.module) won't work because module isn't global. This prints out some details about module.

// const log = require('./logger') //imports the function from logger.js that we previously made public in logger.js
// console.log(logger) //details changed - now have a path, etc
// logger.log('message')
// log('message') //since we changed logger.js to export just hte function and not an entire object, we can now call logger as a more familiar function like this.

// const path = require('path')
// const os = require('os')
// var pathObj = path.parse(__filename)
// console.log(pathObj)
// var totalMem = os.totalmem()
// var freeMem = os.freemem()
// console.log('Total Memory: ' + totalMem)

// template string in ES6
// console.log(`Total Memory: ${totalMem}`)
// console.log(`Free Memory: ${freeMem}`)
//JS, since historically has only worked within browsers, has not until recently been able to provide thi info. Now, it can ping the server and access this (among other things, like listen for HTTP requests.)

//file system//
// const fs = require('fs')

// const files = fs.readdirSync('./') //this is the synchronous version (readdir being the asynchronous), which we typically don't use.  Using it here because it's a simple example.
// console.log(files)

//for asynchronous, there is a second functions that runs at the same time (hence asynchronous) - this function is the callback function. Example below. Only one of the two arguments will actually result, since the first is an error.
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err)
//     else console.log('Result', files)
// })


//Events//
// const EventEmitter = require('events') //is a class, so variable is set with capital E
// // const emitter = new EventEmitter()//no longer need

// //Raise: logging (data: message)//
// const Logger = require('./logger')
// const logger = new Logger()

// // Register a listener
// logger.on('messageLogged', (arg) => {//same as emitter.addListener(). arg can also be e, or event.
//     console.log('Listener called', arg)
// }) 

// logger.log('message')

//HTTP//
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World')
        res.end()
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})
server.on('connection', (socket) => {
    console.log('New connection...')
})
server.listen(3000)
console.log('Listening on port 3000...')




