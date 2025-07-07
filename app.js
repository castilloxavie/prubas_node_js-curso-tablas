const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar")
const argv = require("./config/yargs");

console.clear();







/* const[,, baseArg] = process.argv;
const [, base = 8] = baseArg.split("=");
console.log(base) */

/* const base = 5; */


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo.rainbow}`.red))
    .catch(err => console.log(err));