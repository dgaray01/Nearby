exports.run = async (nearby, message, args, nivel) => {
  const members = args.slice(0).join(" ");
  if (!members) return nearby.emit("argumentosInvalidos", message, this);
  await nearby.db.models.servidor.update({
    TOTALUSUARIOSYBOTSNOMBRE: members
  },
  {
    where: {
      servidorID: message.guild.id
    },
    fields: [ 'TOTALUSUARIOSYBOTSNOMBRE' ]
  });
  nearby.metodos.totalCount(nearby, message);
  const emojiz = new nearby.Embed()
  .setNearbyColor("#363942")
  .setNearbyFooter("✅ se ha cambiado el correctamente a " + members, nearby.user.displayAvatarURL)
  .send(message.channel);
};
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: ["setmbtn"],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "setmbtotalname",
    categoria: "Conteo",
    descripcion: "Personalizaa nombre el conteo total de miembros y bots.",
    uso: "setmbtotalname 👥 + 🤖 Total: {total}"
  };