"use strict";
exports.__esModule = true;
var setListeners = function (secretsJson, twitchClient) {
    client.Dispatcher.on("GATEWAY_READY", function () {
        return console.log("Connected to Discord as:", client.User.username);
    });
    client.Dispatcher.on("MESSAGE_CREATE", function (e) {
        if (e.message.author.username !== secretsJson.discord_botname) {
            client.say(secretsJson.twitch_channel, e.message.content);
        }
    });
};
exports["default"] = setListeners;
