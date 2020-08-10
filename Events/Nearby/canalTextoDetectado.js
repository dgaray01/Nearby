module.exports = (nearby, message) => {
	const self = new nearby.Embed()
  .setNearbyTitle("Informacion")
  .setNearbyColor("#363942")
  .addNearbyBetterField("Error", "Canal de texto detectado")
  .send(message.channel);
};