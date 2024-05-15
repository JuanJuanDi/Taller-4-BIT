// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
let cantUnos = 0;

for(let numero of nums){
    if (numero == 1 ){
        cantUnos++;
    }
}

console.log(cantUnos);

const arrUnos = nums.filter (function(numero){
    return numero == 1
});

console.log(arrUnos);