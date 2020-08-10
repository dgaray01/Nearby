module.exports = async (nearby, emoji) => {
  await nearby.metodos.emojisCount(nearby, emoji);
};