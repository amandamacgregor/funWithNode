//first thing's first..

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Amanda')
// console.log(window) //gives an error

//Modules:
//OS, FS, Events, HTTP

console.log() //global object. Global scope, can access anywhere
setTimeout() //also global. Sets a timeout based on timeframe we give it.
clearTimeout() //also global. 

setInterval() //also global. 
clearInterval() //also global.  Research these in more depth outside of this tutorial.

// window // JSobject where all above functions can be accessed.
    // window.console.log = how console.log() translates behind the scenes
    
//In Node, we have global instead of window    
    