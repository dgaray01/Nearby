
exports.run = async (nearby, message, args, nivel) => {
  const argumentos = args.join(" ");
      let sembed = new nearby.Embed()
      .setNearbyDescription(argumentos, false)
      .setNearbyRainbow()
      .send(message.channel);
      message.erase().catch(console.error);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "sayembed",
  categoria: "Diversión",
  descripcion: "quieres que diga algo en embed ?",
  uso: "[p]sayembed"
};