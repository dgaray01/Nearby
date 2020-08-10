
const { createHash } = require("crypto");
exports.run = async (nearby, message, args, nivel) => {
  let texto = args.slice(0).join(" ");
  const s = createHash("sha256").update(texto).digest("hex");
  await message.send(`**${texto}:** ` + s);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "sha256",
  categoria: "Utilidades",
  descripcion: "convierte un texto en sha256",
  uso: "[p]sha256 <texto>"
};