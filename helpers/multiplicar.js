const colors = require("colors");
const fs = require("fs");
const path = require("path"); // Agrega esto

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let x = 1; x <= hasta; x++) {
      salida += `${base} x ${x} = ${base * x}\n`;
    }

    if (listar) {
      console.log("==============================".bgMagenta);
      console.log(`Tabla de multiplicar del ${base}`.green);
      console.log("==============================".bgMagenta);
      console.log("El archivo ha sido creado exitosamente!".cyan);
      console.log("Contenido del archivo:");
      console.log(salida.rainbow);
    }

    // Asegura que la carpeta exista y usa ruta relativa
    const dir = path.join(__dirname, "salida");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(path.join(dir, `tabla-${base}.txt`), salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};