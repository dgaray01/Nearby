const _ = require('lodash/core');
module.exports = async (nearby, message) => {
  if (message.author.bot) return;
  let modelo_del_servidor = await nearby.db.models.servidor.findOne({
      attributes: [ 'prefix' ],
      where: {
        servidorID: message.guild.id
      }
    });
  modelo_del_servidor.dataValues.prefix.concat(nearby.configuracion.prefix);
    if (!message.guild.prefix || !_.isEqual(message.guild.prefix, modelo_del_servidor.dataValues.prefix)) {
      message.guild.prefix = [ ...new Set(modelo_del_servidor.dataValues.prefix) ];
    }
  if (message.content.indexOf(message.guild.prefix) !== 0) return;
  const args = message.content.slice(message.guild.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);
  const nivel = nearby.permlevel(message);
  const cmd = nearby.comandos.get(command) || nearby.comandos.get(nearby.apodos.get(command));
  if (!cmd) return;
  if (nivel < nearby.nivelCache[cmd.configuracion.permiso]) {
    if (nearby.configuracion.notificaciones) {
      const embed = new nearby.Embed()
      .setNearbyTitle("◴ Falta de permisos")
      //.setNearbyRainbow()
      //.addNearbyBetterField("📊 Nivel", `${nivel}`, false)
      //.addNearbyBetterField("📖 Nombre", `${nearby.config.permLevels.find(l => l.level === nivel).name}`, false) //oc
      //.addNearbyBetterField("✅ Requiere Nivel", `${nearby.nivelCache[cmd.configuracion.permiso]}`, true)
      .setNearbyDescription(`**No tienes permisos el permiso: ´${cmd.configuracion.permiso}´**`);
      return message.send(embed);
    } else {
      return;
    }
  }
  message.author.permLevel = nivel;
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  nearby.logger.log("notice", `[Shard: ${nearby.shard.id + 1}] ${nearby.config.permLevels.find(l => l.level === nivel).name} [${message.author.username}] => (${message.author.id}) ejecuto el comando ${cmd.help.nombre} en [${message.guild.name}]`);
  cmd.run(nearby, message, args, nivel);
};