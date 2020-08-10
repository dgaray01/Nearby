module.exports = async (cliente, miembro) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'TOTALCANALESID', 'TODOSLOSCANALESNOMBRE' ],
      where: {
        servidorID: miembro.guild.id
      }
    });
    let allChannelsname = conteo.dataValues.TODOSLOSCANALESNOMBRE.replace("{total}", miembro.guild.channels.size);
    cliente.channels.get(conteo.dataValues.TOTALCANALESID).setName(allChannelsname);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de todos los canales de texto: " + e);
    }
  }
}