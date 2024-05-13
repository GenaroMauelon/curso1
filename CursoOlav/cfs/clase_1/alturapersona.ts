import * as rls from 'readline-sync';

let alturaPersona : number = rls.questionInt ("para pasar debe superar los 1.30m");

if (alturaPersona>1.3) {
    console.log("el numero es mayor o igual a 1.3m por lo tanto puede pasar");
    } else {
        console.log("el numero es menor a 1.3m por lo tanto no puede pasar");
    }
