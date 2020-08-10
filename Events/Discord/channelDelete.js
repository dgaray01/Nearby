module.exports = async (nearby, channel) => {
  nearby.metodos.voiceChannelCount(nearby, channel);
  nearby.metodos.textChannelCount(nearby, channel);
  nearby.metodos.categoryCount(nearby, channel);
  nearby.metodos.allChannelsCount(nearby, channel);
};