"use strict";
exports.__esModule = true;
var Discordie = require("discordie");
var secretsJson = require("../secrets.json");
var client = new Discordie();
client.connect({ token: secretsJson.discord_bot_token });
var say = function (username, message) {
    var guild = client.Guilds.find(function (g) { return g.name == secretsJson.discord_server; });
    if (!guild)
        return console.log("invalid guild");
    var chan = guild.channels;
    if (!self) {
        chan[0].sendMessage("**" + username + ":**  " + message);
    }
};
var connect = function () {
    client.connect({ token: secretsJson.discord_bot_token });
};
