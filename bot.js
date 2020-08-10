/* <--- File System ---> */
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
/* <--- Nearby ---> */
const Nearby = require("nearby-rewrite");
const nearby = new Nearby.Client({
  carpetaDeConfiguracion: "settings",
  forceFetchUsers: true
});
const Sequelize = require('sequelize');
nearby.db = new Sequelize(nearby.credenciales.db.URI, {
  logging: false
});

require('events').EventEmitter.prototype._maxListeners = 100;
nearby.handlers = require("./handlers");
nearby.log = require("./handlers/logHandler.js");
nearby.package = require("./package.json");
nearby.metodos = require("./methods");
nearby.permisos = Nearby.Permissions.FLAGS;
nearby.on("warn", (e) => nearby.log.aviso(e));
if (nearby.configuracion.depuracion) {
  nearby.on("debug", (e) => nearby.log.depuracion(e));
} else {
  nearby.log.depuracion("Depuración desactivada.");
}
nearby.configuraciones = new Enmap({ name: "configuracion" });
/* <--- Funciones ---> */
require("./Core/funciones.js")(nearby);
/* <--- Configuracion Personal ---> */
nearby.config = require("./config.js");
const init = async () => {
  /* <--- Comandos ---> */
  await nearby.cargarComandos("Commands");
  /* <--- Eventos ---> */
  await nearby.cargarEventos("Events/Discord");
  await nearby.cargarEventos("Events/Nearby");
  /* <--- Niveles de permisos ---> */
  nearby.nivelCache = {};
    for (let i = 0; i < nearby.config.permLevels.length; i++) {
      const esteNivel = nearby.config.permLevels[i];
      nearby.nivelCache[esteNivel.name] = esteNivel.level;
    }
  /* <--- Estadisticas ---> */
  await nearby.actualizarEstadisticas();
};
nearby.db.authenticate().then(() => {
  require('./db/esquema')(Sequelize, nearby.db);
  init();
  nearby.entrar(nearby.credenciales.token).then(() => {
    nearby.db.models.configuracion.findOrBuild({
      where: {
        nearbyID: nearby.user.id
      }
    }).spread((configuraciondelmodelo, inicializado) => {
      if (inicializado) {
        return configuraciondelmodelo.save();
      }
    }).catch(console.error);
  }).catch(e => {
    nearby.logger.log("error", e.toString());
    process.exit(1);
  });
}).catch(err => {
  nearby.logger.log("error", err);
}); 