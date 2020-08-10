exports.run = async (nearby, message, args, nivel) => {
  const Weez = require("weez");
  const weez = new Weez.WeezAPI(nearby.credenciales.weezapi);
  let usuario;
  if (message.mentions.users.size) {
    message.startNearbyTyping();
    usuario = message.mentions.users.first();
    let img = await weez.triggered(usuario.displayAvatarURL);
    const Embed = new nearby.Embed()
      .setNearbyRainbow()
      .attachFiles([{
        attachment: img,
        name: "img.gif"
      }])
      .setNearbyImage("attachment://img.gif")
      .send(message.channel);
    message.stopNearbyTyping();
  }
  if (!usuario) {
    message.startNearbyTyping();
    usuario = await nearby.obtenerImagen(message);
    let img = await weez.triggered(usuario);
    const Embed = new nearby.Embed()
      .setNearbyRainbow()
      .attachFiles([{
        attachment: img,
        name: "img.gif"
      }])
      .setNearbyImage("attachment://img.gif")
      .send(message.channel);
    message.stopNearbyTyping();
  } 
};

exports.configuracion = {
  activado: false,
  soloServidor: true,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "triggered",
  categoria: "Imagen",
  descripcion: "Efecto Triggered Gif",
  uso: "[p]triggered <@usuario>"
};
