"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi = require("tmi.js");
const twitchClient = secretsJson => {
    const tmiOptions = {
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
    const client = new tmi.client(tmiOptions);
    const say = (_username, message) => {
        client.say(secretsJson.twitch_channel, message);
    };
    const setListeners = discordClient => {
        client.on("connected", () => console.log("Connected to Twitch as:", secretsJson.user));
        client.on("chat", (_channel, userstate, message, self) => {
            if (!self) {
                discordClient.say(userstate.username, message);
            }
        });
    };
    const connect = () => {
        client.connect();
    };
    return {
        connect,
        say,
        setListeners
    };
};
exports.twitchClient = twitchClient;
//# sourceMappingURL=client.js.map