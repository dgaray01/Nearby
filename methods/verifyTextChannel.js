module.exports = (message, id) => {
  if(message.guild.channels.get(id).type === "voice") return true;
  return false;
}