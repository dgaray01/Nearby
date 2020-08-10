module.exports = async (cliente, role) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'ROLESID', 'ROLESNOMBRE' ],
      where: {
        servidorID: role.guild.id
      }
    });
    let rolename = conteo.dataValues.ROLESNOMBRE.replace("{total}", role.guild.roles.size);
    cliente.channels.get(conteo.dataValues.ROLESID).setName(rolename);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de roles: " + e);
    }
  }
}