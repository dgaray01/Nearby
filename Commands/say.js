const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
  const pvto = args.join(" ");
  await message.erase().catch();
  await message.send(pvto);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};
exports.help = {
  nombre: "say",
  categoria: "Diversión",
  descripcion: "quieres que diga algo ?",
  uso: "[p]say"
};  