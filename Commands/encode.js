const base64 = require("js-base64").Base64;
exports.run = async (nearby, message, args, nivel) => {
  const b64Encoded = base64.encode(args.join(" "));
    await message.send(`\`\`\`\n${b64Encoded}\`\`\``);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "encode",
  categoria: "Utilidades",
  descripcion: "Codificar Un Texto En Base64",
  uso: "[p]encode <texto>"
};