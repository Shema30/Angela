// function sum(callback,x,y) {
//     let result = x + y
//     callback(result)
// }

// function displayConsole(result) {
//     console.log(result)
// }

// sum(displayConsole, 1, 2)

function hello (callback) {
    console.log("hello")
    callback()
}

function goodbye () {
    console.log("goodbye")
}

hello(goodbye);