const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para añadir el efecto de remolino");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    gm(request(image)).swirl(180).strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.stopNearbyTyping();
      message.send({
        files: [{
          attachment: stdout,
          name: "swirl.png"
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
  nombre: "swirl",
  categoria: "Imagen",
  descripcion: "Efecto Remolino.",
  uso: "[p]swirl"
};  