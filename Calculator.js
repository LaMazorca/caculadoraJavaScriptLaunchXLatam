//Creación de la clase, para las funciones de la calculadora
class Calculator {
    sum (num1, num2) {
        return num1 + num2;
    };

    subtraction (num1, num2) {
        return num1 - num2;
    };

    multiply (num1, num2) {
        return num1 * num2;
    }

    divide (num1, num2) {
        return num1 / num2;
    };

    power (num1, num2) {
        return Math.pow(num1, num2);
    };

    root (num1) {
        return Math.sqrt(num1);
    }
}