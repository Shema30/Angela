// var num = []
// for (num.length = 0; num.length <= 100; num.length++){
//     if (num.length % 3 == 0){
//         num.push("Fizz")
//     }
//     else if (num.length % 5 == 0){
//         num.push("Buzz")
//     }
//     else if (num.length % 3 == 0 && num.length % 5 == 0){
//         num.push("FizzBuzz")
//     }
// }

// console.log(num)

// var output = []
// var i = 1

// function FizzBuzz() {

//     if (i % 3 == 0) {
//         output.push("fizz")
//     }
//     else if (i % 5 == 0) {
//         output.push("buzz")
//     }
//     else if (i % 3 == 0 && i % 5 == 0) {
//         output.push("fizzbuzz")
//     }
//     else {
//         output.push(i)
//     }
//     i++
//     console.log(output)
// }

// FizzBuzz()
// FizzBuzz()
// FizzBuzz()
// FizzBuzz()

// =====================Challenge====================================

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whospaying(names){
    var randomName = Math.random() * names.length
    var paying = names[Math.floor(randomName)]
    console.log(paying + " is paying the bill")
}

whospaying(names)
