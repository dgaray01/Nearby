exports.run = async (nearby, message, args, nivel) => {
  let usuario;
  if (message.mentions.users.size) {
    usuario = message.mentions.users.first();
  }
  if (!usuario) {
    usuario = message.author;
  }
  const embed = new nearby.Embed()
    .setNearbyRainbow()
    .addNearbyField("Avatar", usuario.tag, false)
    .setNearbyImage(usuario.avatarURL)
    .send(message.channel)
};

exports.configuracion = {
  activo: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "avatar",
  categoria: "General",
  descripcion: "Muestra tu avatar o Muestra el avatar de un usuario.",
  uso: "[p]avatar / [p]avatar @usuario"
};  