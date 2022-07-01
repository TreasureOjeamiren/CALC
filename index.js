// read numbers in the program
const Name = ' <h3>Build a basic arithmetic calculator without a frontend</h3>'
document.write(Name)
const num1 = parseFloat(prompt('Enter number1'));
const num2 = parseFloat(prompt('Enter number2'));
// read operator
const operator = prompt('Enter operator(+, -, /, *)');
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
    alert('Wrong Input Refresh the page again and provide data! ');
} else {

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    }

    prompt(num1 + operator + num2 + ' = ' + result);
}

