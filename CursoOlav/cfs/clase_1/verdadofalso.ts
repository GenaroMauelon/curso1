import * as readlynesync from 'readline-sync';

let nroDeseado : number = readlynesync.questionInt("escriba el numero que desea verificar si es mayor o no a 20: ");

if (nroDeseado > 20) {
    console.log('el numero es mayor a 20: ' + nroDeseado);
} else {
    console.log('el numero es menor o igual a 20:' + nroDeseado);
}