const request = require("request");
const tempy = require("tempy");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});
exports.run = async (nearby, message, args, nivel) => {
  const image = await nearby.obtenerImagen(message).catch(error => {
    message.sendWarn("Necesitas proporcionar una imagen para aplicar el efecto de espejo");
    console.log(error);
  });
  const woowCrop = tempy.file({extension: "png"});
  const woowFlip = tempy.file({extension: "png"});
  if (image !== undefined) {
    message.startNearbyTyping();
    gm(request.get(image)).gravity("North").crop(0, "50%").strip().write(woowCrop, (error) => {
      if (error) throw new Error(error);
      gm(woowCrop).flip().strip().write(woowFlip, (error) => {
        if (error) throw new Error(error);
        gm(woowCrop).append(woowFlip).strip().stream((error, stdoutFinal) => {
          if (error) throw new Error(error);
          message.stopNearbyTyping();
          message.send({
            files: [{
              attachment: stdoutFinal,
              name: "mirror.png"
            }]
          });
        });
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
  nombre: "mirror",
  categoria: "Imagen",
  descripcion: "Efecto Espejo.",
  uso: "[p]mirror"
};  