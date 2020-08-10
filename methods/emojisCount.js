module.exports = async (cliente, emoji) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'EMOJISID', 'EMOJISNOMBRE' ],
      where: {
        servidorID: emoji.guild.id
      }
    });
    let emojiname = conteo.dataValues.EMOJISNOMBRE.replace("{total}", emoji.guild.emojis.size);
    cliente.channels.get(conteo.dataValues.EMOJISID).setName(emojiname);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de emojis: " + e);
    }
  }
}