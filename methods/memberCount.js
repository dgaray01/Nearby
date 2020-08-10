module.exports = async (cliente, miembro) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'USUARIOSID', 'USUARIOSNOMBRE' ],
      where: {
        servidorID: miembro.guild.id
      }
    });
    let membername = conteo.dataValues.USUARIOSNOMBRE.replace("{total}", miembro.guild.members.filter(m => !m.user.bot).size);
    cliente.channels.get(conteo.dataValues.USUARIOSID).setName(membername);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de miembros: " + e);
    }
  }
}