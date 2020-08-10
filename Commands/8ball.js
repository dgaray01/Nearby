exports.run = async (nearby, message, args, nivel) => {
  if(!args[2]) return message.sendWarn("Por favor dígame una pregunta completa.")
  await message.startNearbyTyping();
  let replicas = ["SÍ uwu.", "No :/",
										"Yo digo que no ;-;",
										"Yo digo que sí :D",
										"No tengo ganas de responder eso.",
										"Tal vez...",
										"Tal vez no...",
										"Probablemente :D",
										"Probablemente no :/",
										";-;",
										"Si dejas de preguntarme ella te amará :3",
                    "No he entendido la pregunta ¿Puedes preguntar de nuevo?",
										"No me preguntastes esto pero ella no te ama ;-;",
										"Mi dueño no quiere que conteste tu pregunta..."];
  
  let resultado = Math.floor((Math.random() * replicas.length));
  let pregunta = args.slice(0).join(" ");
  let embed = new nearby.Embed()
  .setNearbyAuthor(message.author.tag, message.author.avatarURL, "https://discord.gg/Zehh4XB")
  .setNearbyRainbow()
  .addNearbyBetterField("🎱Pregunta", pregunta, false)
  .addNearbyBetterField("🎱Respuesta", replicas[resultado], false)
  .setNearbyImage("https://cdn.discordapp.com/attachments/497066229731688471/575837470860509235/lEL.gif")
  .send(message.channel);
  await message.stopNearbyTyping();
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: ["8ball", "8"],
  permiso: "Everyone"
};

exports.help = {
  nombre: "8ball",
  categoria: "Diversión",
  descripcion: "preguntale cualquier cosa.",
  uso: "[p]8ball"
};