import * as readlinesync from 'readline-sync';

let base : number = readlinesync.questionInt('Ingresa el numero de la base: ');
let exponente: number = readlinesync.questionInt('Ingresa el numero del exponente: ');
let i : number;

for ( i= 1; i <= exponente; i++ ) {
    let potencia : number = calcularPotencia(base, i);
   
    console.log('el resultado es: ' + potencia);
}
function calcularPotencia(base: number, exponente: number): number {
    return base ** exponente;
}