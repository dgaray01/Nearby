const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
  let member = message.mentions.users.first();
  if (!member) message.sendWarn("Mencione un usuario.")
  if(member.id === nearby.user.id) return message.sendFail("No puedo Auto-Banearme");
  if (member.id === message.author.id) return message.sendWarn("No puedes Auto-Banearte");
  let reason = args.slice(1).join(' ')
  if (!reason) reason = "Soft-Ban.";
  const mensaje = await message.sendWarn("Soft-Ban..");
  if (!member) return await message.sendFail("No se encontro miembro.");
  else await mensaje.editSuccess(member + " ha sido baneado suavemente [Razon: " + reason + " ]")
  try {
    await message.guild.member(member).ban(reason);
    await message.guild.member(member).unban(reason);
  } catch (e) {
    return await mensaje.editFail("No se pudo hacer Soft-Ban");
  }
  
};

exports.configuracion = {
  activado: true,
  soloServidor: true,
  apodos: [],
  permiso: "KICK_MEMBERS"
};

exports.help = {
  nombre: "softban",
  categoria: "Moderación",
  descripcion: "banear a un miembro suavemente.",
  uso: "[p]softban @usuario"
};  