const colors = require("colors");
const argv = require("yargs/yargs")(process.argv.slice(2))
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar".green,
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Muestra la tabla en consola".green,
    })
    .option("h", {
        alias: "hata",
        type: "number",
        default: 10,
        describe: "Mustra hasta donde quiere la tabla".green,
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número";
        }
        return true;
    })
    .argv


module.exports = argv;