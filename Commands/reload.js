exports.run = async (nearby, message, args, nivel) => {
  if (!args || args.length < 1) return message.sendWarn("Proporciona un comando.");

  let RESPUESTA = await nearby.desmontarComado(args[0]);
  if (RESPUESTA) return await message.sendFail(`Error al desactivar: ${RESPUESTA}`);

  RESPUESTA = nearby.cargarComando(args[0]);
  if (RESPUESTA) return await message.sendFail(`Error al cargar: ${RESPUESTA}`);

  message.sendSuccess(`El comando \`${args[0]}\` ha sido recargado`);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Nearby Admin"
};

exports.help = {
  nombre: "reload",
  categoria: "Sistema",
  descripcion: "recargar un comando **(Solo Propietario)**",
  uso: "reload [comando]"
};