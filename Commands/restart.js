exports.run = async (nearby, message, args, nivel) => {
  nearby.logger.log("notice", "Reiniciando el bot...")
  await message.sendSuccess("Nearby se esta reiniciando... <a:loading:579049066730881034>");
  message.react("✅")
  nearby.comandos.forEach( async cmd => {
    await nearby.desmontarComado(cmd);
    
  });
  process.exit(1);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Nearby Admin"
};

exports.help = {
  nombre: "restart",
  categoria: "Sistema",
  descripcion: "Reiniciar **(Solo Propietario)**",
  uso: "restart"
};