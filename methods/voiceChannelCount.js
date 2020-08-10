module.exports = async (cliente, channel) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'TOTALUSUARIOSYBOTSID', 'TOTALUSUARIOSYBOTSNOMBRE' ],
      where: {
        servidorID: channel.guild.id
      }
    });
    let voicechannel = conteo.dataValues.CANALESDEVOZNOMBRE.replace("{total}", channel.guild.channels.filter(i => i.type == "voice").size);
    cliente.channels.get(conteo.dataValues.CANALESDEVOZID).setName(voicechannel);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de canales de voz:" + e);
    }
  }
}