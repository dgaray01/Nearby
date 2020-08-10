module.exports = async (nearby, message, clave, valorUnido) => {
  const embed = new nearby.Embed()
  .setNearbyRainbow();
  try {
        if (clave === "TOTALUSUARIOSYBOTSID") {
          if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
            await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
            nearby.metodos.totalCount(nearby, message);
            message.reactSuccess();
          } else {
            message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
          }
      } else
        if (clave === "USUARIOSID") {
          if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
            await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
            nearby.metodos.memberCount(nearby, message);
            message.reactSuccess();
          } else {
            message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
          }
        } else
          if (clave === "BOTSID") {
            if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
              await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
              nearby.metodos.botCount(nearby, message);
              message.reactSuccess();
            } else {
              message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
            }
          } else
            if (clave === "ROLESID") {
              if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                nearby.metodos.roleCount(nearby, message);
                message.reactSuccess();
              } else {
                message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
              }
            } else
              if (clave === "CANALESDEVOZID") {
                if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                  await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                  nearby.metodos.voiceChannelCount(nearby, message);
                  message.reactSuccess();
                } else {
                  message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
                }
              } else
                if (clave === "CANALESDETEXTOID") {
                  if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                    await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                    nearby.metodos.textChannelCount(nearby, message);
                    message.reactSuccess();
                  } else {
                    message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
                  }
                } else
                  if (clave === "CATEGORIASID") {
                    if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                      await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                      nearby.metodos.categoryCount(nearby, message);
                      message.reactSuccess();
                    } else {
                      message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
                    }
                  } else
                    if (clave === "TOTALCANALESID") {
                      if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                        await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                        nearby.metodos.allChannelsCount(nearby, message);
                        message.reactSuccess();
                      } else {
                        message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
                      }
                    } else
                      if (clave === "EMOJISID") {
                        if (nearby.metodos.verifyVoiceChannel(message, valorUnido)) {
                          await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                          nearby.metodos.emojisCount(nearby, message);
                          message.reactSuccess();
                        } else {
                          message.sendFail("Eso es un canal de texto por favor especifique la ID del canal de voz.");
                        }
                      } else {
                        if (clave === "PREFIX") {
                          await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                          embed.setNearbyTitle("Prefix Actualizado.")
                          .addNearbyBetterField("Prefix", valorUnido)
                          .send(message.channel);
                        } else {
                          if (clave === "TOTALUSUARIOSYBOTSNOMBRE") {
                            await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                            embed.setNearbyTitle("Nombre Actualizado.")
                            .addNearbyBetterField("Nombre", valorUnido)
                            .send(message.channel);
                            nearby.metodos.totalCount(nearby, message);
                          } else {
                            if (clave === "USUARIOSNOMBRE") {
                              await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                              embed.setNearbyTitle("Nombre Actualizado.")
                              .addNearbyBetterField("Nombre", valorUnido)
                              .send(message.channel);
                              nearby.metodos.memberCount(nearby, message);
                            } else {
                              if (clave === "BOTSNOMBRE") {
                                await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                embed.setNearbyTitle("Nombre Actualizado.")
                                .addNearbyBetterField("Nombre", valorUnido)
                                .send(message.channel);
                                nearby.metodos.botCount(nearby, message);
                              } else {
                                if (clave === "ROLESNOMBRE") {
                                  await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                  embed.setNearbyTitle("Nombre Actualizado.")
                                  .addNearbyBetterField("Nombre", valorUnido)
                                  .send(message.channel);
                                  nearby.metodos.roleCount(nearby, message);
                                } else {
                                  if (clave === "CANALESDEVOZNOMBRE") {
                                    await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                    embed.setNearbyTitle("Nombre Actualizado.")
                                    .addNearbyBetterField("Nombre", valorUnido)
                                    .send(message.channel);
                                    nearby.metodos.voiceChannelCount(nearby, message);
                                  } else {
                                    if (clave === "CANALESDETEXTONOMBRE") {
                                      await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                      embed.setNearbyTitle("Nombre Actualizado.")
                                      .addNearbyBetterField("Nombre", valorUnido)
                                      .send(message.channel);
                                      nearby.metodos.textChannelCount(nearby, message);
                                    } else {
                                      if (clave === "CATEGORIASNOMBRE") {
                                        await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                        embed.setNearbyTitle("Nombre Actualizado.")
                                        .addNearbyBetterField("Nombre", valorUnido)
                                        .send(message.channel);
                                        nearby.metodos.categoryCount(nearby, message);
                                      } else {
                                        if (clave === "TODOSLOSCANALESNOMBRE") {
                                          await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                          embed.setNearbyTitle("Nombre Actualizado.")
                                          .addNearbyBetterField("Nombre", valorUnido)
                                          .send(message.channel);
                                          nearby.metodos.allChannelsCount(nearby, message);
                                        } else {
                                          if (clave === "EMOJISNOMBRE") {
                                            await nearby.configuraciones.set(message.guild.id, valorUnido, clave);
                                            embed.setNearbyTitle("Nombre Actualizado.")
                                            .addNearbyBetterField("Nombre", valorUnido)
                                            .send(message.channel);
                                            nearby.metodos.emojisCount(nearby, message);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
      } catch (e) {
        nearby.logger.log("warning", "Verificador de configuracion: " + e);
      }
}