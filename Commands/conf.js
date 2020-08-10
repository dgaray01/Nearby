const { inspect } = require("util");

exports.run = async (nearby, message, [accion, clave, ...valor], nivel) => {

  const pordefecto = nearby.configuraciones.get("default");

  if (accion === "add") {
    if (!clave) return message.sendWarn("Por favor, especifique una clave para agregar");
    if (pordefecto[clave]) return message.sendWarn("Esta clave ya existe en la configuración por defecto.");
    if (valor.length < 1) return message.sendWarn("Por favor especifique un valor");

    pordefecto[clave] = valor.join(" ");

    nearby.configuraciones.set("default", pordefecto);
    message.sendSuccess(`${clave} se ha añadido con éxito con el valor de ${valor.join(" ")}`);
  } else

  if (accion === "edit") {
    if (!clave) return message.sendWarn("Por favor, especifique una clave para editar");
    if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en la configuración.");
    if (valor.length < 1) return message.sendWarn("Por favor, especifique un nuevo valor");

    pordefecto[clave] = valor.join(" ");

    nearby.configuraciones.set("default", pordefecto);
    message.sendSuccess(`${clave} se ha editado con éxito a ${valor.join(" ")}`);
  } else
  
  if (accion === "del") {
    if (!clave) return message.sendWarn("Por favor, especifique una clave para eliminar.");
    if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en la configuración.");
    
    const response = await nearby.esperarRespuesta(message, `¿Estás seguro de que deseas eliminar permanentemente ${clave} de todos los servidores? Esto no se puede deshacer.`);

    if (["s", "si"].includes(response)) {

      delete pordefecto[clave];
      nearby.configuraciones.set("default", pordefecto);

      for (const [guildid, conf] of nearby.configuraciones.filter((setting, id) => setting[clave] && id !== "default")) {
        delete conf[clave];
        nearby.configuraciones.set(guildid, conf);
      }
      
      message.sendSuccess(`${clave} fue eliminado exitosamente.`);
    } else
    if (["n","no","cancelar"].includes(response)) {
      message.sendFail("acción cancelada.");
    }
  } else
  if (accion === "get") {
    if (!clave) return message.sendWarn("Por favor, especifique una clave para ver");
    if (!pordefecto[clave]) return message.sendFail("Esta clave no existe en las configuraciones.");
    message.sendSuccess(`El valor de ${clave} es actualmente ${pordefecto[clave]}`);

  } else {
    await message.send(`***__Nearby Setup__***\n\`\`\`js\n${inspect(pordefecto)}\n\`\`\``);
  }
};

exports.configuracion = {
  activado: true,
  soloServidor: true,
  apodos: [],
  permiso: "Nearby OP"
};

exports.help = {
  nombre: "setup",
  categoria: "Sistema",
  descripcion: "Configuracion privada **(Solo Propietario)**",
  uso: "setup <view/get/edit> <clave> <valor>"
};
