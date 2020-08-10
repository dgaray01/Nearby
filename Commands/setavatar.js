exports.run = async (nearby, message, args, nivel) => {
  if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {
    return message.sendWarn("Proporciona un link valido.");
  }
  await nearby.user.setAvatar(args.join(' '));
  const embed = new nearby.Embed()
  .setNearbyTitle(nearby.user.username + " Avatar Actualizado.")
  .setNearbyRainbow()
  .setNearbyImage(args.join(' '));
  await message.send(embed).catch(e => {
    nearby.logger.log("error", e);
  });
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "NearbyOP"
};

exports.help = {
  nombre: "setavatar",
  categoria: "Sistema",
  descripcion: "Cambiar el avatar de nearby **(Solo Propietario)**",
  uso: "[p]setavatar <Link>"
};  