exports.run = async (nearby, message, args, nivel) => {
  const valor = args.slice(0).join(" ");
  const embed3 = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("❌ Se detecto un texto.");
  if (!valor) return nearby.emit("argumentosInvalidos", message, this);
  if (isNaN(valor)) return message.send(embed3);
  if (nearby.metodos.verifyVoiceChannel(message, valor)) {
    await nearby.db.models.servidor.update({
    TOTALUSUARIOSYBOTSID: valor
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'TOTALUSUARIOSYBOTSID' ]
  });
  nearby.metodos.totalCount(nearby, message);
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