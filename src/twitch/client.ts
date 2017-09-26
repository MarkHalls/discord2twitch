import * as tmi from "tmi.js";
import { BotConfig } from "../common/types";

const twitchClient = (config: BotConfig) => {
  const tmiOptions = {
    options: {
      debug: true
    },
    connection: {
      reconnect: true
    },
    identity: {
      username: config.user,
      password: config.twitch_user_oauth
    },
    channels: [`#${config.twitch_channel}`]
  };

  const client = new tmi.client(tmiOptions);

  const say = (_username: string, message: string) => {
    client.say(`#${config.twitch_channel}`, message);
  };

  const setListeners = discordClient => {
    client.on("connected", () =>
      console.log("Connected to Twitch as:", config.user)
    );

    client.on("chat", (_channel, userstate, message, self) => {
      if (!self) {
        discordClient.say(
          userstate["display-name"] || userstate.username,
          message
        );
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

export { twitchClient };
