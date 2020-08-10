module.exports = (nearby, guild) => {
  if (nearby.configuraciones.has(guild.id)) {
    nearby.configuraciones.delete(guild.id);
  }
  nearby.db.models.servidor.destroy({
    where: {
      servidorID: guild.id
    }
  }).catch(e => {
    nearby.logger.log("error", e);
  });
};