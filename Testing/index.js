// const calcArea = function(radius){
//     let a = (3.14 * radius**2)
//     return a
// }

// Arrow functions

// const calcArea = (radius) => {
//     return (3.14 * radius**2)
// }

// radiuss = 5
// const area = calcArea(radiuss)
// console.log(area)

// function bmiCalculator(weight,height){
//     return Math.round(weight / (height**2))
// }
// var weightInput = prompt("Enter your weight")
// var heightInput = prompt("Enter your height")
// var bmi = bmiCalculator(weightInput, heightInput); 
// console.log(bmi)

function checkBMI (weight, height){

    var bmi = (weight / (height**2))

    if(bmi < 18.5){
        // console.log(bmi)
        return ("You are Underweight")
    }

    else if (bmi >= 18.5 && bmi <= 24.9){
        // console.log(bmi)
        return ("You have Normal Weight")
    }

    else (bmi > 25); {
        // console.log(bmi)
        return ("You are Overweight")
    }
    
}

checkBMI(50,2)



// var name1="Serge"
// var name2="Kevine"
// var loveScore = Math.floor((Math.random()*100)+1)
// alert("Your love match is "+loveScore)