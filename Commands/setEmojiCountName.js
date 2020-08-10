exports.run = async (nearby, message, args, nivel) => {
  const emojis = args.slice(0).join(" ");
  if (!emojis) return nearby.emit("argumentosInvalidos", message, this)
  await nearby.db.models.servidor.update({
    EMOJISNOMBRE: emojis
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'EMOJISNOMBRE' ]
  });
  nearby.metodos.emojisCount(nearby, message);
  const emojiz = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("✅ se ha cambiado el correctamente a " + emojis, nearby.user.displayAvatarURL)
  .send(message.channel);
};
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: [""],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "setemojicountname",
    categoria: "Conteo",
    descripcion: "Personalizaa nombre el conteo de emojis.",
    uso: "[p]setemojicountname <Emojis: {total}>"
  };