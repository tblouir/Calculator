let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let zero = document.querySelector('.zero')
let decimal = document.querySelector('.decimal')
let clear = document.querySelector('.clear')
let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')
let submit = document.querySelector('.submit')
let numberLine = document.querySelector('.number-line h1')
let buttons = document.querySelectorAll('.button')
let lastOperator;
let currentValue = 0;
let runningValue = 0;
let oneDecimal = true;
let pressTwice = false;
let array = [];

document.addEventListener('keydown', (key => {
    let value = key.key
    if (parseInt(value) >= 0 || value=== '-' || value === '+' || value === '/' || value === '*' || value === '.' || value === '=' || value === 'Enter' || value === 'Backspace') {
        switch (value) {
            case '0':
                zero.click();
                break;
            case '1':
                one.click();
                break;
            case '2':
                two.click();
                break;
            case '3':
                three.click();
                break;
            case '4':
                four.click();
                break;
            case '5':
                five.click();
                break;
            case '6':
                six.click();
                break;
            case '7':
                seven.click();
                break;
            case '8':
                eight.click();
                break;
            case '9':
                nine.click();
                break;
            case '-':
                subtract.click();
                break;
            case '+':
                add.click();
                break;
            case '*':
                multiply.click();
                break;
            case '/':
                divide.click();
                break;
            case '.':
                decimal.click();
                break;
            case '=':
                submit.click();
                break;
            case 'Enter':
                submit.click();
                break;
            case 'Backspace':
                clear.click();
                break;
            default:
                console.log("ERROR");
        }
    }
}))

buttons.forEach(button => button.addEventListener('click', e => {
    if (!isNaN(e.target.textContent) || e.target === decimal) {
        if (oneDecimal || !isNaN(e.target.textContent)) {
            array.push(e.target.textContent);

            if (array[0] === '.') {
                array.unshift(0);
                number = parseFloat(array.join(''));
                currentValue = number;
                numberLine.textContent = `0.${number}`;
            } else {
                number = parseFloat(array.join(''));
                currentValue = number;
                numberLine.textContent = number;
            }
        }

        if (e.target === decimal) {
            oneDecimal = false;
        }
    }

    if (e.target === clear) {
        clearArray();
        numberLine.textContent = 0;
        currentValue = 0;
        runningValue = 0;
        pressTwice = false;
        oneDecimal = true;
        lastOperator = undefined;
    }

    if (e.target === add || e.target === subtract || e.target === multiply || e.target === divide) {
        
        if (lastOperator === undefined) {
            lastOperator = e.target;
        };

        if (pressTwice) {
            switch (lastOperator) {
                case add:
                    calculateNumber(addition);
                    break;
                case subtract:
                    calculateNumber(subtraction);
                    break;
                case multiply:
                    calculateNumber(multiplication);
                    break;
                case divide:
                    calculateNumber(division);
                    break;
                default:
                    console.log("DEFAULT")
                }
                lastOperator = e.target;
        };

        if (runningValue === 0) {
            runningValue = currentValue;
        };

        clearArray();
        pressTwice = true;
    }

    if (e.target === submit) {
        if (lastOperator === undefined) {
            numberLine.textContent = currentValue;
        } else {
            switch (lastOperator) {
                case add:
                    calculateNumber(addition);
                    break;
                case subtract:
                    calculateNumber(subtraction);
                    break;
                case multiply:
                    calculateNumber(multiplication);
                    break;
                case divide:
                    calculateNumber(division);
                    break;
                default:
                    console.log("DEFAULT")
            }
            lastOperator = e.target;
        }
    }
})
);

function addition() {
    return runningValue += currentValue;
}
function subtraction() {
    return runningValue -= currentValue;
}
function multiplication() {
    return runningValue *= currentValue;
}
function division() {
    if (currentValue === 0) {
        return "DIVIDE BY 0 : WORLD IS ENDING";
    } else {
        return Math.round((runningValue /= currentValue) * 1000) / 1000;
    }
}

function clearArray() {
    array.splice(0, array.length);
}

function calculateNumber(operator) {
    numberLine.textContent = operator();
    console.log('Running Value: ' + runningValue);
    console.log('Current Value: ' + currentValue);
    pressTwice = false;
    clearArray();
}