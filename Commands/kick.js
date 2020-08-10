const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
  let member = message.mentions.members.first()
  if (!member) message.sendWarn("Mencione un usuario.");
  if(member.id === nearby.user.id) return message.sendFail("No puedo Auto-Kickearme");
  if (member.id === message.author.id) return message.sendWarn("No puedes Auto-Kickearte");
  let reason = args.slice(1).join(' ')
  if (!reason) reason = "No Especificada.";
  const mensaje = await message.sendWarn("Kickeando..")
  if (!member) return await message.sendFail("No se encontro miembro.");
  else await mensaje.editSuccess(member + " ha sido kickeado [Razon: " + reason + " ]")
  try {
    await member.kick({ reason });
  } catch (e) {
    return await mensaje.editFail("No se pudo kickear");
  }
  
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "KICK_MEMBERS"
};

exports.help = {
  nombre: "kick",
  categoria: "Moderación",
  descripcion: "kick a un miembro.",
  uso: "[p]kick @usuario"
};  