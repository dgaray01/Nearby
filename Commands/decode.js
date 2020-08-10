const base64 = require("js-base64").Base64;
exports.run = async (nearby, message, args, nivel) => {
  const b64Decoded = base64.decode(args.join(" "));
  await message.send(`\`\`\`\n${b64Decoded}\`\`\``);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "decode",
  categoria: "Utilidades",
  descripcion: "Decodificar Un Texto En Base64",
  uso: "[p]decode <texto>"
};