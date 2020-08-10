
module.exports = async (nearby, message) => {
  try {
    if (message.author.bot) return;
    if (message.guild) {
      nearby.handlers.commandHandler(nearby, message);
    }
  }
  catch (e) {
    nearby.logger.log("error", e)
  }
};