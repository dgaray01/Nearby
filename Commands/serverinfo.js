
const Discord = require("discord.js");

exports.run = async (nearby, message, args, nivel) => {
    function verificarDias(fecha) {
        let ahora = new Date();
        let dif = ahora.getTime() - fecha.getTime();
        let dias = Math.floor(dif / 86400000);
        return dias + (dias == 1 ? " dia" : " dias");
    };
    let niveles_de_verificacion = ["Nada", "Bajo", "Medio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new nearby.Embed()
        .setNearbyAuthor(message.guild.name, message.guild.iconURL, "https://discord.gg/Zehh4XB")
        .setNearbyRainbow()
        .addNearbyBetterField("\nNombre", message.guild.name, false)
        .addNearbyBetterField("ID", message.guild.id, false)
        .addNearbyBetterField("Propietario", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, false)
        .addNearbyBetterField("Región", region[message.guild.region], false)
        .addNearbyBetterField("Total | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, false)
        .addNearbyBetterField("Nivel De Verificación", niveles_de_verificacion[message.guild.verificationLevel], false)
        .addNearbyBetterField("Canales", message.guild.channels.size, false)
        .addNearbyBetterField("Roles", message.guild.roles.size, false)
        .addNearbyBetterField("Fecha De Creación", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${verificarDias(message.channel.guild.createdAt)})`, false)
        .addNearbyBetterField("Emojis", message.guild.emojis.size || "Ninguno.", false)
        .setNearbyThumbnail(message.guild.iconURL)
        .setNearbyImage("https://cdn.discordapp.com/attachments/497066229731688471/575837470860509235/lEL.gif")
        .send(message.channel);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};
  
exports.help = {
    nombre: "serverinfo",
    categoria: "Información",
    descripcion: "informacion sobre el servidor actual",
    uso: "[p]serverinfo"
  };  