// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to safely get parsed input
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return [num1, num2];
}

// ADD
document.getElementById('add').addEventListener('click', function () {
    const [number1, number2] = getInputValues();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// SUBTRACT
document.getElementById('subtract').addEventListener('click', function () {
    const [number1, number2] = getInputValues();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// MULTIPLY
document.getElementById('multiply').addEventListener('click', function () {
    const [number1, number2] = getInputValues();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// DIVIDE
document.getElementById('divide').addEventListener('click', function () {
    const [number1, number2] = getInputValues();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
