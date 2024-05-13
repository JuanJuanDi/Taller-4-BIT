// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

let primerNumero = parseInt(prompt("Por favor, ingresa el primer número:"));

let segundoNumero = parseInt(prompt("Por favor, ingresa el segundo número:"));

if (primerNumero <= segundoNumero) {
    console.log("Números en el rango de " + primerNumero + " a " + segundoNumero + ":");
    for (let i = primerNumero; i <= segundoNumero; i++) {
        console.log(i);
    }
} else {
    console.log("Números en el rango de " + primerNumero + " a " + segundoNumero + ":");
    for (let i = primerNumero; i >= segundoNumero; i--) {
        console.log(i);
    }
}

