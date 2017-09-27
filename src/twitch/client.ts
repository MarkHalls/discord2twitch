import * as tmi from "tmi.js";

const twitchClient = (user: string, oauth: string, channel: string) => {
  const tmiOptions = {
    options: {
      debug: true
    },
    connection: {
      reconnect: true
    },
    identity: {
      username: user,
      password: oauth
    },
    channels: [`#${channel}`]
  };

  const client = new tmi.client(tmiOptions);

  const say = (_username: string, message: string) => {
    client.say(`#${channel}`, message);
  };

  const setListeners = discordClient => {
    client.on("connected", () => console.log("Connected to Twitch as:", user));

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
