const num1 =  parseInt(prompt('Escriba el primer numero'));
const num2 =  parseInt(prompt('Escriba el segundo numero'));

if(num1>num2){
    document.write(`El ${num1} es el numero mas grande`);
}else if(num2>num1){
    document.write(`El ${num2} es el numero mas grande`);
}else if(num1 == num2){
    document.write(`El primer numero: ${num1} es igual al segundo numero: ${num2}`);
}