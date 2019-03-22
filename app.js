const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo))) //colors.green(`${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//let base = '8';

//console.log(module);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*
console.log('Base: ', argv.base);
console.log('Limite: ', argv.limite);*/

/*console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/