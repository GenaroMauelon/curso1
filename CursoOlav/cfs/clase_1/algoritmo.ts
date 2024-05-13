import * as rls from 'readline-sync'; 

let Usuario = rls.question ("Ingrese el usuario");

if (Usuario='Juan') {
    console.log('el usuario es correcto')
}
let contraseña = rls.question ('Ingrese la contraseña');

if (contraseña='claveJuan') {
    console.log('La contraseña es correcta');
}