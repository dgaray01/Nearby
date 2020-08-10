exports.run = async (nearby, message, [accion, clave, ...valor], nivel) => {
    const configuraciones = message.configuraciones;
    const pordefecto = nearby.config.defaultSettings;
    const anular = nearby.configuraciones.get(message.guild.id);
    if (!nearby.configuraciones.has(message.guild.id)) nearby.configuraciones.set(message.guild.id, {});
    if (accion === "edit") {
      if (!clave) return message.sendWarn("Por favor, especifique una clave para editar");
      if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en la configuración.");
      const valorUnido = valor.join(" ");
      if (valorUnido.length < 1) return message.sendWarn("Por favor, especifique un nuevo valor");
      if (valorUnido === configuraciones[clave]) return message.sendWarn("¡Esta configuración ya tiene ese valor!");
      if (!nearby.configuraciones.has(message.guild.id)) nearby.configuraciones.set(message.guild.id, {});
      //message.sendSuccess(`${clave} editada exitosamente a ${valorUnido}`);
      nearby.metodos.checkConf(nearby, message, clave, valorUnido);
    } else
    if (accion === "del" || accion === "reset") {
      if (!clave) return message.sendWarn("Por favor, especifique una clave para restablecer.");
      if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en la configuración.");
      if (!anular[clave]) return message.sendWarn("Esta clave no tiene una anulación y ya está utilizando los valores predeterminados.");
      const respuesta = await nearby.esperarRespuesta(message, `**¿Está seguro de que desea restablecer ${clave} al valor predeterminado?**`);
      if (["s", "si"].includes(respuesta.toLowerCase())) {
        nearby.configuraciones.delete(message.guild.id, clave);
        message.sendSucces(`${clave} se restableció con éxito a la configuración predeterminada.`);
      } else
      if (["n","no","cancelar"].includes(respuesta)) {
        message.sendSuccess(`Tu configuración para \`${clave}\` permanece en \`${configuraciones[clave]}\``);
      }
    } else
    
    if (accion === "get") {
      if (!clave) return message.sendWarn("Por favor, especifique una clave para ver");
      if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en la configuración.");
      const esPorDefecto = !anular[clave] ? "\nEste es el valor predeterminado global predeterminado." : "";
      message.reply(`El valor de ${clave} es actualmente ${configuraciones[clave]}${esPorDefecto}`);
    } else {
      //const array = [];
      //Object.entries(configuraciones).forEach(([clave, valor]) => {
        //array.push(`**[${clave}](https://discord.gg/WWxrrm)**${" ".repeat(1 - clave.length)} => \`${valor}\``); 
      //});
      const embed = new nearby.Embed()
      .setNearbyTitle("Configuración")
      .setNearbyRainbow()
      .setNearbyDescription("**Para saber como configurar por favor [Click Aquí](https://nearby-inc.gitbook.io/nearby/)\nSi la configuración esta bien yo reaccionare con ✅**")
      .setNearbyFooter("Utiliza [p]set <reset/get/edit> <clave> <valor>", nearby.user.avatarURL)
      await message.send(embed);
    }
  };
  
  exports.configuracion = {
    activado: true,
    soloServidor: true,
    apodos: ["set"],
    permiso: "MANAGE_GUILD"
  };
  
  exports.help = {
    nombre: "settings",
    categoria: "Sistema",
    descripcion: "Ver o cambiar la configuración de este servidor.",
    uso: "settings <reset/get/edit> <clave> <valor>"
  };