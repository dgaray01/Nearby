exports.run = async (nearby, message, args, nivel) => {
  let embed = new nearby.Embed()
  .setNearbyAuthor(message.author.tag, message.author.avatarURL, "https://discord.gg/3mDRw3J")
  .setNearbyDescription(`Hola **${message.author.tag}** si necesitas ayuda para configurarme solamente da **[Click Aqui](https://discord.gg/3mDRw3J).**`)
  .setNearbyRainbow()
  .send(message.channel);
};
  
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: [""],
    permiso: "Everyone"
  };
  
  exports.help = {
    nombre: "support",
    categoria: "General",
    descripcion: "Invitacion al servidor de soporte.",
    uso: "[p]support"
  };