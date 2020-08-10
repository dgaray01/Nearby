const request = require("request");
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para leer un código QR");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    const imageURI = encodeURI(image);
    request({ uri: `https://api.qrserver.com/v1/read-qr-code/?fileurl=${imageURI}`, json: true }, (error, response, body) => {
      if (error) throw new Error(error);
      if (body[0].symbol[0].error === null) {
        message.stopNearbyTyping();
        let embed = new nearby.Embed()
          .setNearbyTitle("Codigo QR")
          .setNearbyRainbow()
          .setNearbyDescription(`\`\`\`\n${body[0].symbol[0].data}\`\`\``)
          .setNearbyThumbnail(image)
          .send(message.channel);
      } else {
        message.stopNearbyTyping();
        message.sendFail("Se produjo un error al leer el código QR.");
      }
    });
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: ["qrr"],
  permiso: "Everyone"
};

exports.help = {
  nombre: "qrread",
  categoria: "Utilidades",
  descripcion: "leer codigo qr",
  uso: "[p]qrread"
};