exports.run = async (nearby, message, args, nivel) => {
  const embed = new nearby.Embed()
  .setNearbyRainbow()
  .addNearbyBetterField("Invitación", `[Click Aquí](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=${nearby.user.id})`, false)
  .send(message.channel);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "invite",
  categoria: "Sistema",
  descripcion: "Genera Invitación De Nearby",
  uso: "[p]invite"
};  