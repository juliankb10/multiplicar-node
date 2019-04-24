const options = {
    base: {
        demand: true, //Hace obligatorio este campo
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //Valor por defecto
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea el archivo con la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}