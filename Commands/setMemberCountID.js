exports.run = async (nearby, message, args, nivel) => {
  const members = args.slice(0).join(" ");
  const embed = new nearby.Embed()
  .setNearbyTitle("Info")
  .setNearbyColor("#363942")
  .addNearbyBetterField("Error", "No se proporciono nungun argumento")
  .addNearbyBetterField("Ejemplo", "[p]setmembercountid [CANAL DE VOZ ID]")
  .addNearbyBetterField("Tip", "Es necesario proporcionar la id de un canal de voz.")
  .setNearbyFooter("❔ Especifique una id valida para el conteo.");
  const embed3 = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("❌ Se detecto un texto.");
  if (!members) return nearby.emit("argumentosInvalidos", message, this);
  if (isNaN(members)) return message.send(embed3);
  if (nearby.metodos.verifyVoiceChannel(message, members)) {
    await nearby.db.models.servidor.update({
    USUARIOSID: members
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'USUARIOSID' ]
  });
  nearby.metodos.memberCount(nearby, message);
  const emojiz = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("✅ ID configurada correctamente.", nearby.user.displayAvatarURL)
  .send(message.channel);
  } else {
    nearby.emit("canalTextoDetectado", message)
  }
  
};
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: [""],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "setmembercountid",
    categoria: "Conteo",
    descripcion: "Establece un canal para el conteo de miembros.",
    uso: "[p]setmembercountid <ID CANAL DE VOZ>"
  };