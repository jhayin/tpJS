const num1 = parseInt(prompt(`Ingrese el primer numero`));
const num2 = parseInt(prompt(`Ingrese el segundo numero`));
const num3 = parseInt(prompt(`Ingrese el tercer numero`));

if( num1 > num2 && num1 >num3){
    document.write(`El primer numero: ${num1} es el mayor de los tres`);
}else if( num2 > num1 && num2 > num3){
    document.write(`El segundo numero: ${num2} es el mayor de los tres`);
}else if(num3 > num1 && num3 > num2){
    document.write(`El tercer numero: ${num3} es el mayor de los tres`);
}