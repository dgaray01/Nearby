const request = require("request").defaults({ encoding: null });
const imageCheck = require("file-type");
module.exports = (nearby) => {
  nearby.permlevel = message => {
    let permlvl = 0;

    const permOrder = nearby.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };
  nearby.obtenerConfiguracion = (servidor) => {
    if(!servidor) return nearby.configuraciones.get("default");
    const servidorConfiguracion = nearby.configuraciones.get(servidor.id) || {};
    return ({...nearby.configuraciones.get("default"), ...servidorConfiguracion});
  }
  nearby.escribirConfiguracion = (id, nuevaConfiguracion) => {
    const porDefecto = nearby.configuraciones.get("default");
    let configuraciones = nearby.configuraciones.get(id) || {};
    nearby.configuraciones.set(id, {
      ..._.pickBy(configuraciones, (v, k) => !_.isNil(porDefecto[k])),
      ..._.pickBy(nuevaConfiguracion, (v, k) => !_.isNil(porDefecto[k]))
    });
  };
  nearby.esperarRespuesta = async (msg, pregunta, limite = 60000) => {
    const filtro = m => m.author.id === msg.author.id;
    await msg.channel.send(pregunta);
    try {
      const colecionado = await msg.channel.awaitMessages(filtro, { max: 1, time: limite, errors: ["time"] });
      return colecionado.first().content;
    } catch (e) {
      return false;
    }
  };
  nearby.limpiar = async (nearby, texto) => {
    if (texto && texto.constructor.name == "Promise")
      texto = await texto;
    if (typeof evaled !== "string")
      texto = require("util").inspect(texto, {depth: 1});

    texto = texto
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(nearby.token, "No Mijo :3");

    return texto;
  };
  nearby.expresionEscape = (cadena) => {
    return cadena.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  nearby.obtenerImagen = async (message) => {
    const listaMensajes = message.channel.messages.sort(function(a, b) {
      return b.createdTimestamp - a.createdTimestamp;
    }).array();
    for (const verificarMensaje of listaMensajes) {
      if (verificarMensaje.attachments.array().length !== 0) {
        const resultado = await nearby.verificarArchivo(verificarMensaje.attachments.array()[0].url);
        if (resultado !== "Archivo adjunto no encontrado") {
          return resultado;
        }
      } else if (verificarMensaje.embeds.length !== 0) {
        if (verificarMensaje.embeds[0].thumbnail) {
          const resultado = await nearby.verificarArchivo(verificarMensaje.embeds[0].thumbnail.url);
          if (resultado !== "Archivo adjunto no encontrado") {
            return resultado;
          }
        } else if (verificarMensaje.embeds[0].image) {
          const resultado = await nearby.verificarArchivo(verificarMensaje.embeds[0].image.url);
          if (resultado !== "Archivo adjunto no encontrado") {
            return resultado;
          }
        }
      }
    }
  };
  nearby.verificarArchivo = (imagen) => {
    return new Promise((resolve, reject) => {
      request.get(imagen, (error, response, body) => {
        if (error) throw new Error(error);
        const tipoImagen = imageCheck(body);
        if (tipoImagen && ["image/jpeg", "image/png", "image/webp"].includes(tipoImagen.mime)) {
          resolve(imagen);
        } else {
          reject("Archivo adjunto no encontrado");
        }
      });
    });
  }; 
  nearby.reproducirSonido = async (sonido, message) => {
    if (message.member.voiceChannel) {
      if (!message.guild.me.permissions.has("CONNECT") || !message.member.voiceChannel.permissionsFor(message.guild.me).has("CONNECT")) return message.sendFail("No puedo unirme a este canal de voz");
      const voiceChannel = message.member.voiceChannel;
      message.channel.send("🔊 Reproduciendo Sonido...");
      const connection = await voiceChannel.join();
      const dispatcher = connection.playStream(sonido)
      dispatcher.on("error", () => {
        voiceChannel.leave();
        console.error;
      });
      dispatcher.on("finish", () => {
        dispatcher.destroy();
        voiceChannel.leave();
      });
    } else {
      message.sendWarn("Necesitas estar primero en un canal de voz.");
    }
  };
  
  Object.defineProperty(String.prototype, "toProperCase", {
    value: function() {
      return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
  });
  Object.defineProperty(Array.prototype, "random", {
    value: function() {
      return this[Math.floor(Math.random() * this.length)];
    }
  });
};