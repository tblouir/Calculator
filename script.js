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
let previousValue = 0;
let array = [];

buttons.forEach(button => button.addEventListener('click', e => {
    if (parseFloat(e.target.textContent) > 0) {
        array.push(e.target.textContent);
        number = parseFloat(array.join(''));
        numberLine.textContent = number;
    }
    if (e.target.textContent === 'Clear') {
        number = 0;
        previousValue = 0;
        array.splice(0, array.length);
        numberLine.textContent = 0;
    }
    switch (e.target.textContent) {
        case '+':
            console.log('add');
            break;
        case '-':
            console.log('subtract');
            break;
        case 'x':
            console.log('multiply');
            break;
        case '/':
            console.log('divide');
            break;
    }
})
)

function addition(num) {
    return previousValue += num;
}
function subtraction(num) {
    return previousValue -= num;
}
function multiplication(num) {
    return previousValue *= num;
}
function division(num) {
    return previousValue /= num;
}
