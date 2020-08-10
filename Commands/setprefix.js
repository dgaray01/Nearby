exports.run = async (nearby, message, args, nivel) => {
  const prefix = args.slice(0).join(" ");
  const embed = new nearby.Embed()
  .setNearbyTitle("Info")
  .setNearbyColor("#363942")
  .addNearbyBetterField("Error", "No se proporciono nungun argumento")
  .addNearbyBetterField("Ejemplo", "[p]setprefix [>, ?, >>,]")
  .setNearbyFooter("❔ Especifique valor para el prefix.")
  if (!prefix) return message.send(embed);
  await nearby.db.models.servidor.update({
    prefix: prefix
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'prefix' ]
  });
  const nuevoprefix = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("✅ se ha cambiado correctamente a " + prefix, nearby.user.displayAvatarURL)
  .send(message.channel);
};
  
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: [""],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "setprefix",
    categoria: "Sistema",
    descripcion: "Cambiar Prefix.",
    uso: "[p]prefix <nuevo prefix>"
  };