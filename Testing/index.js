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

var output = []

function FizzBuzz (){
    for (var i = 1; i <= 100; i++){
        output.push(i)
    }
    console.log(output)
}

FizzBuzz()