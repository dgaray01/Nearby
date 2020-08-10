const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
  let usuario = message.mentions.users.first();
  if(!usuario) return nearby.emit("argumentosInvalidos", message, this.help);
  if(usuario.id === nearby.user.id) return message.sendFail("No puedo Auto-Banearme");
  if (usuario.id === message.author.id) return message.sendWarn("No puedes Auto-Banearte");
  let razon = args.slice(1).join(' ')
  if (!razon) razon = "No Especificada.";
  const mensaje = await message.sendWarn("Baneando..")
  if (!usuario) return await message.sendFail("No se encontro miembro.");
  else await mensaje.editSuccess(usuario + " ha sido baneado [Razon: " + razon + " ]")
  try {
    await message.guild.member(usuario).ban(razon);
  } catch (e) {
    return await mensaje.editFail("No se pudo banear.");
  }
  
};

exports.configuracion = {
  activo: true,
  soloservidor: false,
  apodos: [],
  permiso: "BAN_MEMBERS"
};

exports.help = {
  nombre: "ban",
  categoria: "Moderación",
  descripcion: "Banear Miembro",
  uso: "[p]ban <@usuario>"
};  