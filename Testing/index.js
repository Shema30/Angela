// function sum(callback,x,y) {
//     let result = x + y
//     callback(result)
// }

// function displayConsole(result) {
//     console.log(result)
// }

// sum(displayConsole, 1, 2)

function hello (call) {
    console.log("hello")
    call()
}

function goodbye () {
    console.log("goodbye")
}

hello(goodbye);