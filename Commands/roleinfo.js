exports.run = async (nearby, message, args, nivel) => {
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;
    const valores = {
      false: "❌",
      true: "<:NearbyCheck:579049063891206150>"
    }
    const admin = role.hasPermission('ADMINISTRATOR');
    const embed = new nearby.Embed()
    .setNearbyColor(role.hexColor)
    .setNearbyTitle(role.name)
    .addNearbyBetterField('Miembros', role.members.size, true)
    .addNearbyBetterField('Color - Hex', role.hexColor, true)
    .addNearbyBetterField('Posición', role.position, true)
    .addNearbyBetterField('ID', role.id, true)
    .addNearbyBetterField('Fecha De Creación', role.createdAt.toDateString(), true)
    .addNearbyBetterField('Administrador', valores[admin], true)
    .addNearbyBetterField('Mencionable', valores[role.mentionable], true)
    .addNearbyBetterField('Administrado', valores[role.managed], true)
    .send(message.channel);
  };
  
exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};
    
exports.help = {
  nombre: "roleinfo",
  categoria: "Información",
  descripcion: "informacion sobre un rol",
  uso: "[p]roleinfo <@usuarios o usuarios>"
};  