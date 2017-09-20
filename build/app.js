"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = require("./twitch");
const discord_1 = require("./discord");
const secretsJson = require("./secrets.json");
const twitch = twitch_1.twitchClient(secretsJson);
const discord = discord_1.discordClient(secretsJson);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
//# sourceMappingURL=app.js.map