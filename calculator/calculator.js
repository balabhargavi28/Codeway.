let displayValue = '0';
let operator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    firstOperand = displayValue;
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = displayValue;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    displayValue = result.toString();
    operator = '';
    updateDisplay();
}
