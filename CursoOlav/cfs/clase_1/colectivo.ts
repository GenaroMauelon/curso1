import * as readlinesync from 'readline-sync';

let llegaElColectivo : string;

llegaElColectivo = readlinesync.question ('Llego el colectivo wacho? (s/n)');

while (llegaElColectivo == "n") {
    console.log('Todavia no llego');

    llegaElColectivo = readlinesync.question ('Llego el colectivo wacho? (s/n)');
}
console.log('Llego el colectivo');
