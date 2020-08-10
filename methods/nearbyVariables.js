module.exports = (texto, nearby) => {
  let variables = {
    '{nearby.usuarios}': nearby.users.size,
    '{nearby.servidores}': nearby.guilds.size,
    '{nearby.shard.id}': nearby.shard.id + 1,
    '{nearby.shard.conteo}': nearby.shard.count,
    '{nearby.comandos}': nearby.comandos.size,
    '{nearby.apodos}': nearby.apodos.size
  };

  let variablesRegExp = new RegExp(Object.keys(variables).join('|'), 'ig');

  texto = texto.replace(variablesRegExp, c => variables[c]);

  return texto;
};
