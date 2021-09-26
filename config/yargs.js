const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Imprime la tabla en consola',
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite de la tabla',
        }
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        else if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un numero';
        }
        else
            return true;
    })
    .argv;


module.exports = argv;