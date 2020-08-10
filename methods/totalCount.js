module.exports = async (cliente, miembro) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'TOTALUSUARIOSYBOTSID', 'TOTALUSUARIOSYBOTSNOMBRE' ],
      where: {
        servidorID: miembro.guild.id
      }
    });
    let totalname = conteo.dataValues.TOTALUSUARIOSYBOTSNOMBRE.replace("{total}", miembro.guild.memberCount);
    cliente.channels.get(conteo.dataValues.TOTALUSUARIOSYBOTSID).setName(totalname);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de miembros totales: " + e);
    }
  }
}