//Declarative function
function helloOne() {
    console.log('Hello one')
}
helloOne()


//Anonymus function
var helloTwo = function() {
    console.log('Hello two')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three')
}
helloThree()

//functions with args
function printName(name) {
    console.log(name)
}
printName("Roman")

//function with return
function multiplyByTwo(number) {
    return number * 2
}