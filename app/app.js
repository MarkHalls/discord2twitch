"use strict";
exports.__esModule = true;
var tmiClient = require("./twitch/client");
var discordClient = require("./discord/client");
tmiClient.connect();
discordClient.connect({ token: secretsJson.discord_bot_token });
