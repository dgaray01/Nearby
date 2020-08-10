
module.exports = async nearby => {
    await nearby.esperar(1000); // message.guild.roles.get("la id del rol").members.map(miembros => miembros.user.id); vale, saco la ID de los 
    nearby.logger.log("warning", `Cargando..`,);
    nearby.guilds.filter(g => !nearby.configuraciones.has(g.id)).forEach(g => nearby.configuraciones.set(g.id, nearby.config.defaultSettings));
    nearby.user.setPresence({
      status: nearby.configuracion.estado,
      game: {
        name: nearby.metodos.nearbyVariables(typeof nearby.configuracion.juego.nombre === 'string' ? nearby.configuracion.juego.nombre : nearby.configuracion.juego.nombre.length ? nearby.configuracion.juego.nombre[0] : null, nearby),
        type: nearby.configuracion.juego.tipo,
        url: nearby.configuracion.juego.url && nearby.configuracion.juego.url.trim().length ? nearby.configuracion.juego.url : null
      }
    });
    if (typeof nearby.configuracion.juego.nombre !== 'string' && nearby.configuracion.juego.nombre.length) {
      nearby.setInterval(async () => {
        try {
          let random = await nearby.configuracion.juego.nombre[Math.floor(Math.random() * nearby.configuracion.juego.nombre.length)];
          await nearby.user.setActivity(nearby.metodos.nearbyVariables(random, nearby),
            {
              type: nearby.configuracion.juego.tipo,
              url: nearby.configuracion.juego.url && nearby.configuracion.juego.url.trim().length ? nearby.configuracion.juego.url : null
            });
        }
        catch (e) {
          nearby.logger.log("error", e);
        }
      }, ((typeof nearby.configuracion.juego.tiempo === 'number' && nearby.configuracion.juego.tiempo) || 60) * 60 * 1000);
    }
  let nearbyServidores = nearby.guilds.map(s => s.id);
    let servidores = await nearby.db.models.servidor.findAll({
      attributes: [ 'servidorID' ]
    });
    servidores = servidores.map(servidor => servidor.servidorID);
    for (let i = 0; i < nearbyServidores.length; i++) {
      let encontrado = false;
      for (let j = 0; j < servidores.length; j++) {
        if (nearbyServidores[i] === servidores[j]) {
          encontrado = true;
          break;
        }
      }
      if (encontrado === false) {
        await nearby.db.models.servidor.create({
          servidorID: nearbyServidores[i]
        },
        {
          fields: [ 'servidorID' ]
        });
      }
    }
    nearby.logger.log("info", "Nearby: se ha iniciado correctamente");
};