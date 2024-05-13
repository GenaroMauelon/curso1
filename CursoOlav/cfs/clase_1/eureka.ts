import * as readlinesync from 'readline-sync';

const claveReal: string = 'eureka';
let claveUsuario: string = readlinesync.question('Ingrese la clave: ');
let contador: number = 0; 
let intentos: number = 1;

while ((contador <= intentos) && (claveUsuario != claveReal)) {
    claveUsuario = readlinesync.question('Ingrese su clave: ');
    contador++;
}

if (claveReal != claveUsuario){
    console.log('te quedaste sin intentos');
} else {
    console.log('contraseña correcta');
}
