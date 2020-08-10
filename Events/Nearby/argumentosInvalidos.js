module.exports = (nearby, message, self) => {
	const xd = new nearby.Embed()
  .setNearbyTitle("Información")
  .setNearbyColor("#363942")
  .addNearbyBetterField("Ejemplo", self.help.uso)
  .send(message.channel);
};