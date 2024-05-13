import * as rls from 'readline-sync';

let posicionLlegada : number = rls.questionInt('ingrese la posicion de llegada del competidor');

switch (posicionLlegada) {
    case 1:
        console.log('entrgar medalla dorada');
        break;
        case 2:
            console.log('entregar medalla de plata');
            break;
            case 3:
                console.log('entregar medalla de bronce');
                break;
                default:
                    console.log('entregar medalla de participacion');

}
