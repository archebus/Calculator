const output = document.getElementById("screen");

const clearBtn = document.getElementById("clear");

const plusBtn = document.getElementById("plus");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

const zeroBtn = document.getElementById("zero");

const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");

const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");

const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");

let currentNum = []

let firstNum = null;
let secondNum = null;
let operator = null;

clearBtn.onclick = () => {
    firstNum = null;
    secondNum = null;
    currentNum.splice(0,currentNum.length);
    updateDisplay()
}

zeroBtn.onclick = () => {
    currentNum.push(0);
    updateDisplay()
}

oneBtn.onclick = () => {
    currentNum.push(1);
    updateDisplay()
}

twoBtn.onclick = () => {
    currentNum.push(2);
    updateDisplay()
}

threeBtn.onclick = () => {
    currentNum.push(3);
    updateDisplay()
}

fourBtn.onclick = () => {
    currentNum.push(4);
    updateDisplay()
}

fiveBtn.onclick = () => {
    currentNum.push(5);
    updateDisplay()
}

sixBtn.onclick = () => {
    currentNum.push(6);
    updateDisplay()
}

sevenBtn.onclick = () => {
    currentNum.push(7);
    updateDisplay()
}

eightBtn.onclick = () => {
    currentNum.push(8);
    updateDisplay()
}

nineBtn.onclick = () => {
    currentNum.push(9);
    updateDisplay()
}

plusBtn.onclick = () => {
    operator = "+";
    if (firstNum == null) {
        firstNum = currentNum.join('');
        currentNum.splice(0,currentNum.length);
        updateDisplay();
    } else {
        secondNum = currentNum.join('');
        currentNum.splice(0,currentNum.length);
        let result = operate(operator, firstNum, secondNum);
        firstNum = result;
        updateDisplay();
    }
}

subtractBtn.onclick = () => {
    operator = "-";
    if (firstNum == null) {
        firstNum = currentNum.join('');
    } else {
        secondNum = currentNum.join('');
        currentNum = operate(operator, firstNum, secondNum);
        updateDisplay();
    }
}

multiplyBtn.onclick = () => {
    operator = "*";
    if (firstNum == null) {
        firstNum = currentNum.join('');
    } else {
        secondNum = currentNum.join('');
        currentNum = operate(operator, firstNum, secondNum);
        updateDisplay();
    }
}

divideBtn.onclick = () => {
    operator = "/";
    if (firstNum == null) {
        firstNum = currentNum.join('');
    } else {
        secondNum = currentNum.join('');
        currentNum = operate(operator, firstNum, secondNum);
        updateDisplay();
    }
}

equalsBtn.onclick = () => {
    if (firstNum == null || operator == null) {
        return;
    } else {
        secondNum = currentNum.join('');
        output.textContent = operate(operator, firstNum, secondNum);
    }
}

function updateDisplay() {
    if (currentNum.length == 0)
    {
        output.textContent = 0;
    } else {
        output.textContent = currentNum.join('');
    }
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b
}

function operate(operator, firstNum, secondNum) {
    var x = Number(firstNum);
    var y = Number(secondNum);
    switch(operator) {
        case "+": return(add(x, y));
        case "-": return(subtract(x, y));
        case "*": return(multiply(x, y));
        case "/": return(divide(x, y));
    }
}