//hola k haces
const config = {
  "ownerID": "497061687820812288",
  "admins": ["514607667482984448", "378742873899794434", "291688428851036171", "460314183859175434", "507073349336432640"],
  "support": [],
  "defaultSettings": {
    "PREFIX": "-",
    "TOTALUSUARIOSYBOTSID": "NO_CONFIGURADO",
    "TOTALUSUARIOSYBOTSNOMBRE": "👥 | 🤖 Total: {{total}}",
    "USUARIOSID": "NO_CONFIGURADO",
    "USUARIOSNOMBRE": "👥 Usuarios: {{total}}",
    "BOTSID": "NO_CONFIGURADO",
    "BOTSNOMBRE": "🤖 Bots: {{total}}",
    "ROLESID": "NO_CONFIGURADO",
    "ROLESNOMBRE": "✨ Roles: {{total}}",
    "CANALESDEVOZID": "NO_CONFIGURADO",
    "CANALESDEVOZNOMBRE": "🔊 Canales de voz: {{total}}",
    "CANALESDETEXTOID": "NO_CONFIGURADO",
    "CANALESDETEXTONOMBRE": "💬 Canales de texto: {{total}}",
    "CATEGORIASID": "NO_CONFIGURADO",
    "CATEGORIASNOMBRE": "📚 Categorias: {{total}}",
    "TOTALCANALESID": "NO_CONFIGURADO",
    "TODOSLOSCANALESNOMBRE": "💬 | 🔊 | 📚 : {{total}}",
    "EMOJISID": "NO_CONFIGURADO",
    "EMOJISNOMBRE": "🔥 Emojis: {{total}}"
},
  permLevels: [
    { level: 0,
      name: "Everyone",
      check: () => true
    },
    { level: 1,
      name: "CREATE_INSTANT_INVITE",
      check: (message) => message.member.hasPermission("CREATE_INSTANT_INVITE")
    },

    { level: 2,
      name: "KICK_MEMBERS",
      check: (message) => message.member.hasPermission("KICK_MEMBERS")
    },
    { level: 3,
      name: "BAN_MEMBERS",
      check: (message) => message.member.hasPermission("BAN_MEMBERS")
    },
    { level: 4,
      name: "MANAGE_CHANNELS",
      check: (message) => message.member.hasPermission("MANAGE_CHANNELS")
    },
    { level: 5,
      name: "MANAGE_GUILD",
      check: (message) => message.member.hasPermission("MANAGE_GUILD")
    },
    { level: 6,
      name: "ADD_REACTIONS",
      check: (message) => message.member.hasPermission("ADD_REACTIONS")
    },
    { level: 7,
      name: "VIEW_AUDIT_LOG",
      check: (message) => message.member.hasPermission("VIEW_AUDIT_LOG")
    },
    { level: 8,
      name: "READ_MESSAGES",
      check: (message) => message.member.hasPermission("READ_MESSAGES")
    },
    { level: 9,
      name: "SEND_MESSAGES",
      check: (message) => message.member.hasPermission("SEND_MESSAGES")
    },
    { level: 10,
      name: "MANAGE_MESSAGES",
      check: (message) => message.member.hasPermission("MANAGE_MESSAGES")
    },
    { level: 11,
      name: "EMBED_LINKS",
      check: (message) => message.member.hasPermission("EMBED_LINKS")
    },
    { level: 12,
      name: "ATTACH_FILES",
      check: (message) => message.member.hasPermission("ATTACH_FILES")
    },
    { level: 13,
      name: "READ_MESSAGE_HISTORY",
      check: (message) => message.member.hasPermission("READ_MESSAGE_HISTORY")
    },
    { level: 14,
      name: "MENTION_EVERYONE",
      check: (message) => message.member.hasPermission("MENTION_EVERYONE")
    },
    { level: 15,
      name: "USE_EXTERNAL_EMOJIS",
      check: (message) => message.member.hasPermission("USE_EXTERNAL_EMOJIS")
    },
    { level: 16,
      name: "CONNECT",
      check: (message) => message.member.hasPermission("CONNECT")
    },
    { level: 17,
      name: "SPEAK",
      check: (message) => message.member.hasPermission("SPEAK")
    },
    { level: 18,
      name: "MUTE_MEMBERS",
      check: (message) => message.member.hasPermission("MUTE_MEMBERS")
    },
    { level: 19,
      name: "DEAFEN_MEMBERS",
      check: (message) => message.member.hasPermission("DEAFEN_MEMBERS")
    },
    { level: 20,
      name: "USE_VAD",
      check: (message) => message.member.hasPermission("USE_VAD")
    },
    { level: 21,
      name: "CHANGE_NICKNAME",
      check: (message) => message.member.hasPermission("CHANGE_NICKNAME")
    },
    { level: 22,
      name: "MANAGE_NICKNAMES",
      check: (message) => message.member.hasPermission("MANAGE_NICKNAMES")
    },
    { level: 23,
      name: "MANAGE_ROLES",
      check: (message) => message.member.hasPermission("MANAGE_ROLES")
    },
    { level: 24,
      name: "MANAGE_WEBHOOKS",
      check: (message) => message.member.hasPermission("MANAGE_WEBHOOKS")
    },
    { level: 25,
      name: "MANAGE_EMOJIS",
      check: (message) => message.member.hasPermission("MANAGE_EMOJIS")
    },
    { level: 26,
      name: "Nearby Soporte",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 27,
      name: "Nearby Administrador",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 28,
      name: "NearbyOP",
      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;