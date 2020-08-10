module.exports = async (cliente, channel) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'CANALESDETEXTOID', 'CANALESDETEXTONOMBRE' ],
      where: {
        servidorID: channel.guild.id
      }
    });
    let textchannel = conteo.dataValues.CANALESDETEXTONOMBRE.replace("{total}", channel.guild.channels.filter(i => i.type == "text").size);
    cliente.channels.get(conteo.dataValues.CANALESDETEXTOID).setName(textchannel);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de canales de texto: " + e);
    }
  }
}