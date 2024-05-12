// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.


let numero = prompt("Por favor, ingresa un número:");

numero = parseInt(numero);

if (numero % 5 === 0) { 
    console.log(numero + " es un múltiplo de 5.");
} else {
    console.log(numero + " no es un múltiplo de 5.");
}

