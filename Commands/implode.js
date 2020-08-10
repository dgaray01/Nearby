const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const imagen = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para hacer implosionar.");
    console.log(error);
  });
  if (imagen !== undefined) {
    message.startNearbyTyping();
    gm(request(imagen)).implode([1]).strip().stream((error, stdout) => {
      if (error) throw new Error(error);
      message.stopNearbyTyping();
      message.send({
        files: [{
          attachment: stdout,
          name: "implode.png"
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
  nombre: "implode",
  categoria: "Imagen",
  descripcion: "Efecto Implosionar.",
  uso: "[p]implode"
};  