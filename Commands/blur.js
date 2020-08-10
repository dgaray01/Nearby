const request = require("request-promise-native").defaults({ encoding: null });
const sharp = require("sharp");
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para desenfocar.");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    const imageData = await request(image);
    sharp(imageData).blur(5).toBuffer().then((data) => {
      message.stopNearbyTyping();
      return message.send({
        files: [{
          attachment: data,
          name: "blur.png"
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
  nombre: "blur",
  categoria: "Imagen",
  descripcion: "Efecto Desenfoque.",
  uso: "[p]blur"
};  