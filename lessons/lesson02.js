//Concatenation and Interpolation
var price = 50
var product = "Cup"
var messageToPrint = "The price for your " + product + " is " + price + " dollars" //Concatenation
var messageToPrint2 = `The price for your ${product} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)