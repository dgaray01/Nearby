module.exports = async (cliente, channel) => {
  
  try {
    let conteo = await cliente.db.models.servidor.findOne({
      attributes: [ 'CATEGORIASID', 'CATEGORIASNOMBRE' ],
      where: {
        servidorID: channel.guild.id
      }
    });
    let Categoryname = conteo.dataValues.CATEGORIASNOMBRE.replace("{total}", channel.guild.channels.filter(c => c.type == "category").size);
    cliente.channels.get(conteo.dataValues.CATEGORIASID).setName(Categoryname);
  }
  catch (e) {
    if (cliente.configuracion.depuracion) {
      cliente.logger.log("warning", "Conteo de categorias: " + e + " el error fue en " + channel.guild.name + " ID: " + channel.guild.id);
    }
  }
}