import * as rls from "readline-sync";
let ingresoUsuario : number = rls.questionInt("ingrese un numero");

function verificarNumero (numeroAverificar : number): string {
    if (numeroAverificar === 0) {
        return "el numero es cero";
    } else if (numeroAverificar % 2 === 0) {
        return "el numero es par";
    } else {
        return "el numero es impar";
    }
}
console.log(verificarNumero(ingresoUsuario));