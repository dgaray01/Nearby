exports.run = async (nearby, message, args, nivel) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const Embed = new nearby.Embed()
  .addNearbyBetterField("Emojis", emojiList, true)
  .setNearbyRainbow()
  .send(message.channel);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "MANAGE_EMOJIS"
};

exports.help = {
  nombre: "listemojis",
  categoria: "Información",
  descripcion: "lista todos los emojis del servidor",
  uso: "[p]listemojis"
};