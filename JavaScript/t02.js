//Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

let añoDeNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");

let nombre = prompt("Por favor, ingresa tu nombre:");

let añoActual = new Date().getFullYear();

let edad = añoActual - añoDeNacimiento;

console.log("Hola " + nombre + ", Tu edad es de " + edad + " años.");
//alert("Hola " + nombre + ", Tu edad es de " + edad + " años.");