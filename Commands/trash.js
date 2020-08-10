const Discord = require("discord.js");
const Weez = require("weez");
const weez = new Weez.WeezAPI("iIqvDM43lQP67DweOXQZGJhWxp87zcwjwiSn");
exports.run = async (nearby, message, args, nivel) => {
  let member = message.mentions.users.first()
  if (!member) return message.sendWarn("Menciona a alguien.")
  message.startNearbyTyping();
  let img = await weez.basura(member.displayAvatarURL);
  let embed = new nearby.Embed()
  .setNearbyColor("#363942")
  .attachFiles([{
    attachment: img,
    name: "basura.png"
  }])
  .setNearbyImage("attachment://basura.png")
  await message.send(embed);
  message.stopNearbyTyping();
};

exports.configuracion = {
  activado: true,
  soloServidor: true,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "trash",
  categoria: "Imagen",
  descripcion: "Usuario Basura",
  uso: "[p]trash <@usuario>"
};
