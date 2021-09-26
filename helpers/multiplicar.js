const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, listar, hasta) => {
    try {
        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('===================='.cyan);
            console.log('   Tabla del:', base);
            console.log('===================='.cyan);
            console.log(salida);
        }

        fs.writeFileSync(`./output/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile: createFile
}
