const Discord = require("discord.js");
exports.run = async (nearby, message, args, nivel) => {
    try {
      const codigo = args.join(" ");
      if (!codigo) return nearby.emit("argumentosInvalidos", message, this.help);
      const mensaje = message;
      const evaluar = eval(codigo);
      const limpiar = await nearby.limpiar(nearby, evaluar);
      await message.send(`\`\`\`js\n${limpiar}\n\`\`\``);
    } catch (err) {
      await message.send(`\`ERROR\` \`\`\`xl\n${await nearby.limpiar(nearby, err)}\n\`\`\``);
    }
  };
  
  exports.configuracion = {
    activado: true,
    soloServidor: false,
    apodos: [],
    permiso: "Nearby Administrador"
  };
  
  exports.help = {
    nombre: "eval",
    categoria: "Sistema",
    descripcion: "Evalúa javascript. **(Solo Propietario)**",
    uso: "[p]eval [...codigo]"
  };