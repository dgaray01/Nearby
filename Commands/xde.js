exports.run = async (nearby, message, args, nivel) => {
  let replicas = ["https://cdn.discordapp.com/attachments/508172749878067240/588477580471173141/JPEG_20190612_161731.jpg", "https://media.discordapp.net/attachments/508172749878067240/588839569416388634/JPEG_20190613_161755.jpg?width=630&height=473"];
  let resultado = Math.floor((Math.random() * replicas.length));
  const embed = new nearby.Embed()
    .setNearbyRainbow()
    .setNearbyTitle("Esta soltero :v")
    .setNearbyDescription("quien quiere su pack 7w7xdxdx")
    .setNearbyImage(replicas[resultado])
    .send(message.channel);
  message.delete();
};
exports.configuracion = {
  activo: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "alex",
  categoria: "alex",
  descripcion: "ekizdi...",
  uso: "[p]alex"
};  