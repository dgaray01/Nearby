const Discord = require("discord.js")
exports.run = async (nearby, message, args, nivel) => {
  try {
    if (!args[0]) {
    let help = new nearby.Embed()
    .setNearbyColor("#363942")
    .addNearbyField("General", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'General').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Información", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Información').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Diversión", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Diversión').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Sistema", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Sistema').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Utilidades", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Utilidades').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Moderación", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Moderación').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Conteo", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Conteo').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .addNearbyField("Imagen", `${nearby.comandos.filter(cmd => cmd.help.categoria === 'Imagen').map(cmd => `**[${cmd.help.nombre}](https://discord.gg/3mDRw3J)**`).join("\n ")}`, false)
    .setNearbyFooter("✅ Usa [p]help [COMANDO] para mas detalles.", nearby.user.displayAvatarUrl);
    message.author.send(help);
  } else {
    let comandos = args[0];
    if (nearby.comandos.has(comandos)) {
      comandos = nearby.comandos.get(comandos);
      if (nivel < nearby.nivelCache[comandos.configuracion.permiso]) return;
      const embed = new nearby.Embed()
        .setNearbyTitle(comandos.help.nombre)
        .setNearbyRainbow()
        .addNearbyBetterField("Descripción", comandos.help.descripcion, false)
        .addNearbyBetterField("Uso", comandos.help.uso, false)
        .addNearbyBetterField("Apodos", comandos.configuracion.apodos.join(", ") || "Ninguno.", false);
      await message.send(embed);
    }
  }
  }
  catch (e) {
    nearby.logger.log("error", e);
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "help",
  categoria: "Sistema",
  descripcion: "lista de todos los comandos.",
  uso: "help [comando]"
};