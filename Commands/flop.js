const request = require("request-promise-native").defaults({ encoding: null });
const sharp = require("sharp");
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("¡Necesitas proporcionar una imagen para aplicar el efecto flop.");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    const imageData = await request(image);
    sharp(imageData).flop().toBuffer().then((data) => {
      message.stopNearbyTyping();
      return message.send({
        files: [{
          attachment: data,
          name: "flop.png"
        }]
      });
    }).catch(error => { throw new Error(error); });
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};
exports.help = {
  nombre: "flop",
  categoria: "Imagen",
  descripcion: "Efecto Flop.",
  uso: "[p]flop"
};  