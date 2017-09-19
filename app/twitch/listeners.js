"use strict";
exports.__esModule = true;
var setListeners = function (discordClient, secretsJson) {
    client.on("connected", function () {
        return console.log("Connected to Twitch as:", secretsJson.user);
    });
    client.on("chat", function (channel, userstate, message, self) {
        discordClient.say(userstate.username, message);
    });
};
exports["default"] = setListeners;
