exports.run = async (nearby, message, args, nivel) => {
  const members = args.slice(0).join(" ");
  if (!members) return nearby.emit("argumentosInvalidos", message, this);
  await nearby.db.models.servidor.update({
    USUARIOSNOMBRE: members
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'USUARIOSNOMBRE' ]
  });
  nearby.metodos.memberCount(nearby, message);
  const emojiz = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("✅ se ha cambiado el correctamente a " + members, nearby.user.displayAvatarURL)
  .send(message.channel);
};
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: [""],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "setmembercountname",
    categoria: "Conteo",
    descripcion: "Personalizaa nombre el conteo de miembros.",
    uso: "[p]setmembercountname <Usuarios: {total}>"
  };