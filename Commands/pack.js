exports.run = async (nearby, message, args, nivel) => {
  const embed = new nearby.Embed()
    .setNearbyRainbow()
    .setNearbyTitle(":v")
    .setNearbyDescription("miren ese pock :Vvvv")
    .setNearbyImage("https://images-ext-2.discordapp.net/external/4Z_Zr8MiNjrAFgrF0rNRa_uriykPNAKgLQgmzTvafF0/%3Fwidth%3D631%26height%3D474/https/media.discordapp.net/attachments/508172749878067240/588500120048369738/JPEG_20190612_174906.jpg?width=630&height=474")
    .send(message.channel)
  message.delete();
};
exports.configuracion = {
  activo: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "pack",
  categoria: "alex",
  descripcion: "pack...",
  uso: "[p]pack"
};  