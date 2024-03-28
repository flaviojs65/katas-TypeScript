

// Mi solución
const makeNegative = (num: number): number => {
    if (num > 0) {
        num = num * -1;
    }
    return num

};

// Mejor solución
const makeNegative2 = (num: number): number => -Math.abs(num);
// Math.abs() devuelve el valor absoluto de un número, 
//es decir, el número sin signo.   

console.log(makeNegative(42));

export { }