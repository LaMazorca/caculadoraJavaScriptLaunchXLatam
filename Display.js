// Clase para la impresión de los numeros en el display
class Display {
    constructor (displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            sum: '+',
            subtraction: '-',
            multiply: '×',
            divide: '÷',
            power: '∧',
            root: '√'
        }
    };

    delete (){
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValues();
    };

    deleteAll (){
        this.operatorType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.printValues();
    };

    addNumber (number) {
        if(number === '.' && this.currentValue.includes('.')) return; 
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    };

    printValues () {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operatorType] || ''}`;
    };

    calculate () {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue) || isNaN(previousValue)) return
            this.currentValue = this.calculator[this.operatorType](previousValue, currentValue);
    };

    compute (type) {
        this.operatorType !== 'equal' && this.calculate();
        this.operatorType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    };
};