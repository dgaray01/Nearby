const qrcode = require("qrcode");
const tempy = require("tempy");
exports.run = async (nearby, message, args, nivel) => {
  const qrOutput = tempy.file({ extension: "png" });
    message.startNearbyTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.stopNearbyTyping();
            message.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.stopNearbyTyping();
        message.response("**[❌]Necesitas proporcionar algún texto para generar un código QR.**");
    }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: ["qr"],
  permiso: "Everyone"
};
exports.help = {
  nombre: "qrcode",
  categoria: "Utilidades",
  descripcion: "Genera un codigo qr",
  uso: "[p]qrcode <texto>"
};