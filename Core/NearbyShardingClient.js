const fs = require("fs");
const YAML = require("yaml");
const configuracionFile = fs.readFileSync('./settings/configuraciones.yaml', 'utf8');
const credencialesFile = fs.readFileSync('./settings/credenciales.yaml', 'utf8');
const { ShardingManager } = require("nearby-rewrite");
const settings = YAML.parse(configuracionFile);
const credentials = YAML.parse(credencialesFile);
class NearbyShardingClient {
    constructor() {
        this.shardingManager = new ShardingManager("./bot.js", {
            totalShards: settings.fragmentos,
            token: credentials.TOKEN
        });
    }

    NearbyShardInit() {
        this.shardingManager.spawn();
    }
}

module.exports = NearbyShardingClient;