const display = document.getElementById("screen");

function appendToDisplay(input) {
    display.value += input;
    console.log(`button press`);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}