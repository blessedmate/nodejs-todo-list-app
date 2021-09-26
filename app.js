const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

createFile(argv.base, argv.listar, argv.hasta)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.log(err));



