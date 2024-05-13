// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:


let frase = prompt("Por favor, ingresa una frase:");

let numero = prompt("Por favor, ingresa un número:");

numero = parseInt(numero);

let contador = 0;

while (contador < numero) {
    console.log(frase);
    contador++;
    console.log('\n');
}


/**El console log para que quedaron separados fue la parque que tuve que buscar para poder que se imprimieran en lineas diferentes */
