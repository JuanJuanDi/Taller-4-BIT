//Escribe un programa que pida al usuario que ingrese un numero, luego pide un segundo numero e imprime en la consola la suma de los nuemeros ingresados

let otraOperacion;

do{
let numero1 = parseFloat(prompt ("Ingresa el primero numero:"));
let numero2 = parseFloat(prompt ("Ingresa el segundo numero:"));
let operacion = prompt ("Ingresa la operacion a realizar ( +, -, *, / ):") 

function realizarOperacion (numero1, numero2, operacion){
    switch (operacion){
        case '+':
            return numero1 + numero2;
       case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return "Operacion no valida";
    }
}

let resultado = realizarOperacion(numero1, numero2, operacion);


alert(`El resultado es de: ${numero1}  ${operacion}  ${numero2}  =  ${resultado}`);
console.log(`EL resultado es de: ${numero1}  ${operacion}  ${numero2}  =  ${resultado}`);

otraOperacion = prompt ( "¿Desea realizar otra operacion? (Si/No)").toLowerCase();

} while ( otraOperacion === "si"); 


/** Se da funcion completa de operacion aritmeticas, no solo de suma y se le da opcion al usuario de hacer varias operacion segun disponga */
