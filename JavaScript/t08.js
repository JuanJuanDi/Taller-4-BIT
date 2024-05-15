/**Crea un programa a partir de las siguientes instrucciones:
Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
Recorre el arreglo e imprímelo. */ 


let nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
let nombre = prompt('Ingresa nombre a insertar');

nombres.push(nombre);

nombre = prompt('Ingresa nombre a remplazar');

nombres[2] = nombre;

nombres.forEach(function(nombre) {
    console.log(nombre);
});
