console.log("***"); //check of node loopt

//wijze 1 - function declaration
function doubleSquare(number1, number2) {
    const sum = Math.pow(number1, 2) + Math.pow(number2, 2);
    return Math.pow(sum, 2);
};
console.log(doubleSquare(5, 6));//expected output:3721

//wijze 2 - function expression
const doubleSquare1 = function (number3, number4) {
    const sum1 = Math.pow(number3, 2) + Math.pow(number4, 2);
    return Math.pow(sum1, 2);
};
console.log(doubleSquare1(5, 6));//expected output: 3721

//wijze 3 - arrow function
const doubleSquare2 = (number5, number6) => {
    const sum2 = Math.pow(number5, 2) + Math.pow(number6, 2);
    return Math.pow(sum2, 2);
};
console.log(doubleSquare2(5, 6));//expected output: 3721
