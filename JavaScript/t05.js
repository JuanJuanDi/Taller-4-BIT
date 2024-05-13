// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. 
//NOTA: utiliza un ciclo para imprimir la frase las 10 veces.



let frase = prompt("Por favor, ingresa una frase:");

let contador = 0;

while (contador < 10) {
    console.log(frase);
    contador++;
}
