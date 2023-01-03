// Obtención de los elementos del HTML guardados en variables
const displayCurrentValue = document.getElementById('current-value');
const displayPreviousValue = document.getElementById('previous-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Impresión de los botones en el display
const display = new Display (displayPreviousValue, displayCurrentValue); 

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorButtons .forEach(button => {
    button.addEventListener('click', () => display.compute(button.value));
});