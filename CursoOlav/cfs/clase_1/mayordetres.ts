import * as readlinesync from 'readline-sync';

let numero1: number = readlinesync.questionInt ('Ingrese el primer numero');
let numero2: number = readlinesync.questionInt ('Ingrese el segundo numero');
let numero3: number = readlinesync.questionInt ('Ingrese el tercer numero');

if (numero1> numero2 && numero1> numero3) {
    console.log('el numero ' + numero1 + ' es el mayor');
} else if (numero2> numero1 && numero2> numero3) {
    console.log('el numero ' + numero2 + ' es el maypr');
} else if (numero3> numero1 && numero3> numero2) {
    console.log('el numero ' + numero3 + ' es el mayor');
}