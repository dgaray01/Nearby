const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para hacer un blurple.");
    console.log(error);
  });
  if (image !== undefined) {
    message.startNearbyTyping();
    gm(request(image)).threshold(75, true).out("+level-colors").out("\"#7289DA\",white").stream((error, stdout) => {
      if (error) throw new Error(error);
      message.stopNearbyTyping();
      message.send({
        files: [{
          attachment: stdout,
          name: "blurple.png"
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
  nombre: "blurple",
  categoria: "Imagen",
  descripcion: "Efecto Blurple",
  uso: "[p]blurple"
};  