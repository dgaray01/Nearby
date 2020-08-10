exports.run = async (nearby, message, args, nivel) => {
      let embed = new nearby.Embed()
      .setNearbyTitle(nearby.user.username)
      .addNearbyBetterField("Shard", "[" + (nearby.shard.id + 1) + "/" + nearby.shard.count + "]", false)
      .addNearbyBetterField("Latencia", Date.now() - message.createdTimestamp + "ms.", false)
      .addNearbyBetterField("Websocket", Math.round(nearby.ping) + "ms.", false)
      .setNearbyColor("#363942")
      .send(message.channel);
      await message.erase().catch(() => {});
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "ping",
  categoria: "General",
  descripcion: "verifica la velocidad de nearby",
  uso: "ping"
};