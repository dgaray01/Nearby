module.exports = (oldMember, newMember) => { 
  let guild = newMember.guild;
  let Spotify = guild.roles.find(x => x.name === "• Spotify");
  let ROBLOX = guild.roles.find(x => x.name === "• ROBLOX");
  let LOL = guild.roles.find(x => x.name === "• League of Legends");
  let Fortnite = guild.roles.find(x => x.name === "• Fortnite");
  let Minecraft = guild.roles.find(x => x.name === "• Minecraft");
  let LabyMod = guild.roles.find(x => x.name === "• Minecraft");
  let Brawlhalla = guild.roles.find(x => x.name === "• Brawlhalla");
  let ZulaOnline = guild.roles.find(x => x.name === "• Zula Online");
  let PUBG = guild.roles.find(x => x.name === "• PUBG");
  let CSGO = guild.roles.find(x => x.name === "• CSGO");
  let GMOD = guild.roles.find(x => x.name === "• GMOD");
  let ZombsRoyale = guild.roles.find(x => x.name === "• ZombsRoyale");
  let GeometryDash = guild.roles.find(x => x.name === "• Geometry Dash");
  if (!Spotify) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Spotify") {
    newMember.addRole(Spotify).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(Spotify.id)) {
    newMember.removeRole(Spotify).catch(console.error);
  }
  if (!ROBLOX) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "ROBLOX") {
    newMember.addRole(ROBLOX).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(ROBLOX.id)) {
    newMember.removeRole(ROBLOX).catch(console.error);
  }
  if (!LOL) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "League of Legends") {
    newMember.addRole(LOL).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(LOL.id)) {
    newMember.removeRole(LOL).catch(console.error);
  }
  if (!Fortnite) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(Fortnite).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(Fortnite.id)) {
    newMember.removeRole(Fortnite).catch(console.error);
  }
  if (!Minecraft) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(Minecraft).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(Minecraft.id)) {
    newMember.removeRole(Minecraft).catch(console.error);
  }
  if (!LabyMod) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "LabyMod") {
    newMember.addRole(LabyMod).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(LabyMod.id)) {
    newMember.removeRole(LabyMod).catch(console.error);
  }
  if (!Brawlhalla) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Brawlhalla") {
    newMember.addRole(Brawlhalla).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(Brawlhalla.id)) {
    newMember.removeRole(Brawlhalla).catch(console.error);
  }
  if (!ZulaOnline) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Zula Online") {
    newMember.addRole(ZulaOnline).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(ZulaOnline.id)) {
    newMember.removeRole(ZulaOnline).catch(console.error);
  }
  if (!PUBG) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
    newMember.addRole(PUBG).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(PUBG.id)) {
    newMember.removeRole(PUBG).catch(console.error);
  }
  if (!CSGO) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Counter-Strike: Global Offensive") {
    newMember.addRole(CSGO).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(CSGO.id)) {
    newMember.removeRole(CSGO).catch(console.error);
  }
  if (!GMOD) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Garry's Mod") {
    newMember.addRole(GMOD).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(GMOD.id)) {
    newMember.removeRole(GMOD).catch(console.error);
  }
  if (!ZombsRoyale) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "ZombsRoyale.io") {
    newMember.addRole(ZombsRoyale).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(ZombsRoyale.id)) {
    newMember.removeRole(ZombsRoyale).catch(console.error);
  }
  if (!GeometryDash) return;
  if (newMember.user.presence.game && newMember.user.presence.game.name === "Geometry Dash") {
    newMember.addRole(GeometryDash).catch(console.error);
  } else if (!newMember.user.presence.game && newMember.roles.has(GeometryDash.id)) {
    newMember.removeRole(GeometryDash).catch(console.error);
  }
};