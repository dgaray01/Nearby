module.exports = async (cliente, miembro) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'BOTSID', 'BOTSNOMBRE' ],
      where: {
        servidorID: miembro.guild.id
      }
    });
    let botname = conteo.dataValues.BOTSNOMBRE.replace("{total}", miembro.guild.members.filter(m => m.user.bot).size);
    cliente.channels.get(conteo.dataValues.BOTSID).setName(botname);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de bots: " + e);
    }
  }
}