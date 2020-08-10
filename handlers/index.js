const extensiones = ["js", ""];
const carpeta = __dirname;

const fs = require("fs");

const modulos = fs.readdirSync(carpeta);
for (let mod of modulos) {
    if (mod === "index.js") continue;
    const datos = mod.split(".");

    const ext = datos.splice(-1, 1)[0];
    if (!extensiones.includes(ext)) continue;

    const nombre = datos.join("");
    exports[nombre] = require(`${carpeta}/${mod}`);
}