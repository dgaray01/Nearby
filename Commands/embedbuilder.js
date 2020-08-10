exports.run = async (nearby, message, args, nivel) => {
  if (!args.length) {
    return nearby.emit("argumentosInvalidos", message, this.help);
  }
  args = JSON.parse(args.join(' '));
  await message.send({
    embed: args
  });

  if (message.deletable) await message.erase().catch(() => {});
};
exports.configuracion = {
  activado: true,
  soloServidor: true,
  apodos: [],
  permiso: "ADMINISTRATOR"
};

exports.help = {
  nombre: "embedbuilder",
  categoria: "Utilidades",
  descripcion: "Crea Un Embed.",
  uso: '[p]embedbuilder {"title": "Hola", "description": "Esto Es Cool No?"}'
};