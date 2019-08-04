// module for login messages
var url = 'http://mylogger.io/log';
const EventEmitter = require('events') //is a class, so variable is set with capital E
// const emitter = new EventEmitter() //not needed

class Logger extends EventEmitter {
    log(message) {
    //sends an HTTP request
    console.log(message);
    
    //Raise an event
    // emitter.emit('messageLogged', { id: 1, url: 'http://' })  //making a noise, produce soemthing. Raising an event. Listener is called when this is raised.
    this.emit('messageLogged', { id: 1, url: 'http://' })  //refactoring to handle a class
    }
}


//both variable and function are private/scoped to this module
// module.exports.log = log; //this allows the function from this module to be accessed.  Making it public.
//only export the things that actually need to be
// module.exports = log //since we're just exporting a single function, not an entire object
module.exports = Logger //now we're exporting the class


