const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para añadir el efecto brightness Contrast.");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    gm(request(image)).colorspace("RGB").out("-brightness-contrast", "30x50").setFormat("jpg").quality(1).stream((error, stdout) => {
      if (error) throw new Error(error);
      message.stopNearbyTyping();
      message.send({
        files: [{
          attachment: stdout,
          name: "fry.jpg"
        }]
      });
    });
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: ["bc"],
  permiso: "Everyone"
};

exports.help = {
  nombre: "brightness",
  categoria: "Imagen",
  descripcion: "Efecto Brightness Contrast",
  uso: "[p]brightness"
};  