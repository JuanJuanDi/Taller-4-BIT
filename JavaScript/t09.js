// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

//Me asisite del video de apoyo


const numero = Number(prompt('Ingresa el # hasta donde se establecerá la iteración'));
let numeros = [];

for (let i = 1; i <= numero; i++) {
    numeros.push(i);
}

numeros.splice(1, 1);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let valor of ['Juan', 'Maria', 'Luis']) {
    console.log(valor);
}

