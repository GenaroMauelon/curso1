import * as readlinesync from 'readline-sync';

let base : number = readlinesync.questionInt ('Ingrese el numero de la base');

let exponente : number = readlinesync.questionInt ('Ingrese el numero del exponente');

while (exponente < 0) {

    console.log ('No se permiten numeros negativos')
    exponente = readlinesync.questionInt ('Ingrese el exponente');

}

let resultado : number;

if (exponente > 0) {
    resultado= potencia (base, exponente);

    console.log ('El resultado es: ' + resultado)

}

else {
    console.log ('El resultado es: 1')
}

function potencia (base: number, exponente: number) {
    let i : number;

    for (i = 1; i <= exponente; i++) {

        resultado= (base ** exponente);
    } return resultado;
}