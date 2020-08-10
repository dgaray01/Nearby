
const COLOR = require('chalk');

/* eslint-disable no-console*/

exports.aviso = (...mensaje) => {
  console.warn(COLOR.blue('[Nearby Aviso]: ') + COLOR.yellow(...mensaje))
};
exports.depuracion = (...mensaje) => {
  console.warn(COLOR.blue('[Nearby Depuración]: ') + COLOR.yellow(...mensaje))
};

exports.error = (...mensaje) => {
  console.log(COLOR.red('[Nearby Error]: ') + COLOR.red(...mensaje));
  console.trace();
};

exports.fatal = (...mensaje) => {
  console.log(COLOR.red('[Nearby Error Fatal]: ') + COLOR.red(...mensaje));
};

exports.info = (...mensaje) => {
  console.log(COLOR.cyan('[Nearby]: ') + COLOR.yellow(...mensaje));
};

exports.mensaje = mensaje => {
  console.log(COLOR.cyan('[Nearby]: ') + mensaje);
};

exports.consola = (...mensaje) => {
  console.log(...mensaje);
};

exports.db = (...mensaje) => {
  console.log(COLOR.blue('[Nearby DB]: ') + COLOR.red(...mensaje));
  console.trace();
};
