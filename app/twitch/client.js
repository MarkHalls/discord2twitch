"use strict";
exports.__esModule = true;
var tmi = require("tmi.js");
var secretsJson = require("../secrets.json");
var tmiOptions = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: secretsJson.user,
        password: secretsJson.twitch_user_oauth
    },
    channels: [secretsJson.twitch_channel]
};
var client = new tmi.client(tmiOptions);
var say = function (username, message) {
    client.say(secretsJson.twitch_channel, message);
};
