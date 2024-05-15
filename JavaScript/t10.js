// Completa el siguiente programa para imprimir los números que sean mayores a 10.
//Me asisite del video de apoyo


const nums = [1, 23, 5, 0, 40, 12, 2, 67, 24, 9, 39];

for(let numero of nums){
    if(numero > 10){
        console.log(numero);
    }
}

const mayoresADiez = nums.filter(function( numero ) {
    return numero > 10;
});

console.log(mayoresADiez);