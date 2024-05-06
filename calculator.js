const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number'); 
const operators = document.querySelectorAll('.operator'); 
const decimal = document.querySelector('.decimal'); 
const equals = document.querySelector('.equals'); 
const clear = document.querySelector('.clear'); 

//adds an eventListener for every button with a class of number
numbers.forEach(number => {
    number.addEventListener('click', () => {
        appendToDisplay(number.textContent);
    });
});

//adds an eventListener for every button with a class of operator
operators.forEach(operator => {
    operator.addEventListener('click', () => {
    appendToDisplay(operator.textContent);
    });
});

//adds an eventListener for the button with a class of decimal
decimal.addEventListener('click', () => {
    appendToDisplay(decimal.textContent);
});

equals.addEventListener('click', calculate);

clear.addEventListener('click', clearDisplay);

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'ERROR';
    }
}

function clearDisplay() {
    display.value = ' ';
}

//keyboard usability 
document.addEventListener('keydown', function(event) {
    const key = event.key;

        if (!isNaN(key) || key === '+' || key === '-' || key === '/' || key === '*' || key === '.' || key === 'backspace' || key === 'Enter') {
            if (key === 'Enter') {
                calculate();
            } else if (key === 'backspace' ) {
                clearDisplay();
            } else {
                appendToDisplay(key);
            }
        }
    });
    