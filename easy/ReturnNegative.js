// Mi solución
var makeNegative = function (num) {
    if (num > 0) {
        num = num * -1;
    }
    return num;
};
// Mejor solución
var makeNegative2 = function (num) { return -Math.abs(num); };
// Math.abs() devuelve el valor absoluto de un número, 
//es decir, el número sin signo.   
console.log(makeNegative(42));
