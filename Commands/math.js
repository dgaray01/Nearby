const math = require("math-expression-evaluator");
exports.run = async (nearby, message, args, nivel) => {
  const embed = new nearby.Embed()
  .setNearbyRainbow();
  
  if (!args[0]) {
    embed.setNearbyFooter("Por favor Ingrese Una Expresion.");
    return await message.send(embed);
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" "));
  } catch (e) {
    resultado = "error: Entrada Invalida";
  }
  embed.addNearbyField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false)
  .setNearbyTitle("📊 Calculadora")
  .addNearbyField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.send(embed);
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "math",
  categoria: "Utilidades",
  descripcion: "Calculadora",
  uso: "[p]math <expresion>"
};  