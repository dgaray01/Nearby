exports.run = async (nearby, message, args, nivel) => {
  if (!args[0]) args[0] = message.author.discriminator
    if (args[0].length !== 4) return await message.response("Los discriminadores son 4 números.")
    let disc = args[0].replace(/[^0123456789]/g, "")
    if (disc.length !== 4) return await message.response("Los discriminadores son 4 números.")
    message.startNearbyTyping();
    await nearby.shard.broadcastEval("this.users.filter(u => u.discriminator === '"+disc+"').map(u => u.username)").then(ret => {
        for (i=0;i<ret.length-1;i++) {
            ret[0].concat(ret[i+1])
        }
        let filtro = {}
        for (i=0;i<ret[0].length;i++) {
            filtro[ret[0][i]] = true
        }
        filtro = Object.keys(filtro)
      const discrimembed = new nearby.Embed()
        .setNearbyDescription("**Discriminador: "+disc+"**\n\n"+filtro.join("\n "))
        .setNearbyRainbow()
        .send(message.channel);
      //message.send(discrimembed)
      message.stopNearbyTyping();
    })
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "discrim",
  categoria: "Utilidades",
  descripcion: "Buscar Usuarios Por Discriminador.",
  uso: "[p]discrim <1234>"
};