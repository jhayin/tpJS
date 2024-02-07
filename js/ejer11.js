/* const input = parseInt(prompt('Ingrese un numero'));

if(input/2 == 0){
    document.write(`El numero ${input} es divisible por 2`);
}else if(input%3 == 0){
    document.write(`El numero ${input} es divisible por 3`);
}
else if(input/5 == 0){
    document.write(`El numero ${input} es divisible por 5`);
}
else if(input%7 == 0){
    document.write(`El numero ${input} es divisible por 7`);
}
else{
    document.write(`El numero ${input} no es divisible por ningun numero`);
}
    document.write(``) */

// pide un numero al usuario
let number = prompt("Please enter a number:");

// convierte el numero en un entero y verifica que sea positivo
if (Number.isInteger(parseFloat(number)) && parseFloat(number) > 0) {
    number = parseInt(number);

    // analiza los numeros por los que es divisible y guarda los divisores en un array
    const divisors = [];
    if (number % 2 === 0) divisors.push(2);
    if (number % 3 === 0) divisors.push(3);
    if (number % 5 === 0) divisors.push(5);
    if (number % 7 === 0) divisors.push(7);

    // muestra los divisores en un alert
    if (divisors.length > 0) {
        alert(`The number is divisible by ${divisors.join(", ")}.`);
    } else {
        alert("The number is not divisible by 2, 3, 5, or 7.");
    }
} else {
    alert("Please enter a valid positive integer.");
}