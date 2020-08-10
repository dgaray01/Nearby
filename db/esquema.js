const fs = require('fs');
const YAML = require('yaml');
const archivo_de_configuracion = fs.readFileSync('./settings/configuraciones.yaml', 'utf8');
const { prefix } = YAML.parse(archivo_de_configuracion);

module.exports = (Sequelize, database) => {
  database.define('configuracion', {
    nearbyID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    }
  });

  const Servidor = database.define('servidor', {
    servidorID: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    prefix: {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: prefix ? [].concat(prefix) : [ '-' ]
    },
    habilitado: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    TOTALUSUARIOSYBOTSID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    TOTALUSUARIOSYBOTSNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "👥 | 🤖 Total: {total}"
    },
    USUARIOSID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    USUARIOSNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "👥 Usuarios: {total}"
    },
    BOTSID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    BOTSNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "🤖 Bots: {total}"
    },
    ROLESID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    ROLESNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "✨ Roles: {total}"
    },
    CANALESDEVOZID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    CANALESDEVOZNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "🔊 Canales de voz: {total}"
    },
    CANALESDETEXTOID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    CANALESDETEXTONOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "💬 Canales de texto: {total}"
    },
    CATEGORIASID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    CATEGORIASNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "📚 Categorias: {total}"
    },
    TOTALCANALESID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    TODOSLOSCANALESNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "💬 | 🔊 | 📚 : {total}"
    },
    EMOJISID: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    EMOJISNOMBRE: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "🔥 Emojis: {total}"
    }
  });
  database.sync();
  return database.models;
};


