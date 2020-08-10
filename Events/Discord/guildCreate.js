module.exports = (nearby, guild) => {
  nearby.configuraciones.set(guild.id, nearby.config.defaultSettings);
  nearby.db.models.servidor.findOrBuild({
    where: {
      servidorID: guild.id
    }
  }).spread((modeloDelServidor, inicializado) => {
    if (inicializado) {
      return modeloDelServidor.save();
    }
  }).catch(e => {
    nearby.logger.log("error", e);
  });
};