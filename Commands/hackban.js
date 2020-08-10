const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
  let id = args.join(" ");
  if(id === nearby.user.id) return message.sendFail("No puedo Auto-Banearme");
  if (id === message.author.id) return message.sendWarn("No puedes Auto-Banearte");
  const mensaje = await message.sendWarn("Intentando Hack-Ban..");
  if (!id) return await message.sendFail("Especifique una id correcta.");
  else await mensaje.editSuccess("Hack-Ban a " + id)
  try {
    await message.guild.member(id).ban("Hack-Ban By Nearby");
  } catch (e) {
    return await mensaje.editFail("No se pudo hacer Hack-Ban.");
  }
  
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "BAN_MEMBERS"
};

exports.help = {
  nombre: "hackban",
  categoria: "Moderación",
  descripcion: "banear a un miembro por id.",
  uso: "[p]hackban <id>"
};