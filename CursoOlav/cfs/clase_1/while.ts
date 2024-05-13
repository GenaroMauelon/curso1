import * as readlinesync from 'readline-sync';

let suma : number, nota : number, promedio : number, contador : number;

contador = 1;
suma = 0;

while (contador <= 10){
     nota= readlinesync.questionFloat ('ingrese su nota');
     suma= suma + nota;
     contador= contador + 1;
}
promedio= suma/10;
console.log('el prmedio del alumno es: ' + promedio);

