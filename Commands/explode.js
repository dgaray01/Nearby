const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para hacer explotar.");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    gm(request(image)).implode([-2]).strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.stopNearbyTyping();
      message.send({
        files: [{
          attachment: stdout,
          name: "explode.png"
        }]
      });
    });
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "explode",
  categoria: "Imagen",
  descripcion: "Efecto Exploción.",
  uso: "[p]explode"
};